---
title: setup DB
description: Setup Supabase and DB schema
---

Supabase account is required to setup the database. If you don't have an account, you can create one [here](https://supabase.com).

## Create "accounts" table

copy the following SQL snippet and run it in SQL editor in your Supabase dashboard.

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

ALTER table public.accounts enable row level security;
```

## Insert a row into the accounts table when a user signs up

Now to insert a row into the accounts table, when users signup, you can run the following SQL snippet into your Supabase dashboard SQL editor:

```sql
-- inserts a row into public.accounts
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

## Enable row level security (RLS)

After you enabled RLS on table "accounts", you need to create two policies that will allow authenticated users to read and insert data into the accounts table.

```sql
CREATE POLICY "Enable read for authenticated users only" ON public.accounts FOR
SELECT
  TO authenticated;
```

```sql
CREATE POLICY "Enable insert for authenticated users only" ON public.accounts FOR
INSERT
  TO authenticated
WITH
  CHECK (TRUE);
```

## Generate Types from DB schema

To verify that the types in your repository align with the DB schema, simply execute the following command in your terminal to generate type definitions from the DB schema.

```bash
  pnpm schema # or npm run schema or yarn schema
```
