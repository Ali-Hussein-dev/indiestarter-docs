---
title: setup DB
description: Setup Supabase and DB schema
---

## Set up a Supabase project

Head over to [database.new](https://database.new) and create a new Supabase project.

When your project is up and running, navigate to the [Table Editor](https://supabase.com/dashboard/project/_/editor), create a new table and insert some data.

Alternatively, you can run the following snippet in your project's [SQL Editor](https://supabase.com/dashboard/project/_/sql/new).

## Create tables in DB

You need to create only one table in the DB, which is the `accounts` table. This table will store the user's account information such as `id`, `email`, `customer_id`, `plan`, `price_id`, `has_access`, `session_id`, and `customer_details`. The `id` column is a foreign key that references the `id` column in the `auth.users` table. The `auth.users` table is created by Supabase when you enable authentication in your project.

### `accounts` table

In order to create a table `accounts` in the public schema with the following columns, you can execute the following SQL query in the SQL editor of the Supabase dashboard.

```sql
CREATE TABLE public.accounts (
  id uuid not null references auth.users on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text,
  customer_id text,
  plan text,
  price_id text,
  has_access boolean,
  session_id text,
  customer_details jsonb,

  primary key (id)
);
```

### Handle new user signup

When a user signs up, you may want to insert a row into the accounts table. To do this, you can create a function `handle_new_user` (feel free to name what you want) that will be insert a row into the accounts table with two columns `id` and `email`. In order to trigger the function, you need to create a trigger `on_auth_user_created` that will trigger the function every time a user is created.

```sql
-- Insert a row into the accounts table when a user signs up
CREATE function public.handle_new_user () returns trigger language plpgsql security definer
set
  search_path = public as $$
begin
  INSERT into public.accounts (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

-- trigger the function every time a user is created
CREATE trigger on_auth_user_created
after INSERT on auth.users for each row
execute procedure public.handle_new_user ();
```

### Security: Enable RLS on the `accounts` table

Currently the `accounts` table is open to all users. To restrict access to the table, you can enable Row Level Security (RLS) on the table, through SQL Editor or the Supabase dashboard.

```sql
-- enable row level security
ALTER table public.accounts enable row level security;

```

Now create a policy that allows **only authenticated users** to read `SELECT` and `INSERT` data into the `accounts` table.

```sql
-- enable read for authenticated users only
CREATE POLICY "Enable read for authenticated users only" 
ON public.accounts FOR
SELECT
  TO authenticated;

-- enable insert for authenticated users only
CREATE POLICY "Enable insert for authenticated users only" 
ON public.accounts FOR
INSERT
  TO authenticated
WITH
  CHECK (TRUE);

```

## Generate Types For TypeScript

To verify that the types in your repository align with the DB schema, simply execute the following command in your terminal to generate type definitions from the DB schema. for more details check the [Supabase Docs](https://supabase.com/docs/reference/cli/supabase-gen-types)

```bash

  npx supabase gen types typescript --project-id <projectId> > src/types/db.types.ts

  # OR use the following script in package.json (Make sure SUPABASE_PROJECT_ID in .env.local)
  pnpm schema # or npm run schema or yarn schema

```
