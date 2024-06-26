---
title: Setup DB
description: Setup Supabase and DB schema
---

## Set up a Supabase project

Head over to [database.new](https://database.new) and create a new Supabase project.

When your project is up and running, navigate to the [Table Editor](https://supabase.com/dashboard/project/_/editor), create a new table and insert some data.

Alternatively, you can run the following snippet in your project's [SQL Editor](https://supabase.com/dashboard/project/_/sql/new).

## Setup your DB schema

Copy the file `supabase/schema.sql` and paste in the [SQL Editor](https://supabase.com/dashboard/project/_/sql/new) and run the query. This will create your DB tables, RLS policies, and functions.


## Generate Types For TypeScript

To verify that the types in your repository align with the DB schema, simply execute the following command in your terminal to generate type definitions from the DB schema. for more details check the [Supabase Docs](https://supabase.com/docs/reference/cli/supabase-gen-types)

```bash

  npx supabase gen types typescript --project-id <projectId> > src/types/db.types.ts

  # OR use the following script in package.json (Make sure SUPABASE_PROJECT_ID in .env.local)
  pnpm schema # or npm run schema or yarn schema

```
