---
title: Initialize Supabase
description: Initialize Supabase.
---

After filling in your Supabase URL and Key in the `.env.local` configuration, you can set up Supabase in your application.

To access Supabase, choose from the following utility functions:

## On the client-side

React Example of using Supabase client in client-side can be found in `src\components\auth\social-logins.tsx`

```tsx
// in CLIENT-SIDE
import {createClient} from "@/lib/supabase/client";

const Component = () => {
  const supabase = createClient();
  // do something with supabase

  return <div>...</div>
}
```

## On the server-side

React Example of using Supabase client in server-side can be found in `src\actions\signin-with-otp.tsx`

```ts
// in SERVER-SIDE e.g api routes or React Server Components
import {createClient} from "@/lib/supabase/server";
import { cookies } from "next/headers";

const serverAction = async () => {
  const supabase = createClient(cookies());
  // do something with supabase
}

```
