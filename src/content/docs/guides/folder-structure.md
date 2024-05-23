---
title: Folder Structure
description: Learn how to navigate the folder structure of a Indie Starter application.
---

The folder structure might be a bit different depending on the plan you choose, the pro plan contains more folders and files than the starter plan.
I tried to keep the folder structur as conventional and simple as possible, so you can easily navigate through the files and folders.

Here is the folder structure of the Indie Starter application:

```bash
├── /src
│   ├── /actions
│   ├── /app
│   ├────── /api
│   ├── /components
│   ├── /hooks
│   ├── /lib
│   ├────── /supabase
│   ├────── /stripe
│   ├── /scripts
│   ├── /types
│   ├── configs.ts
│   ├── env.js
```

To import a file from the `src` folder you can use the `@/` alias, for example:

```tsx
import { Button } from '@/components/Button';
// also
import { useAuth } from '@/hooks/useAuth'; 
// and last
import { supabase } from '@/configs';
```

You can customize the import alias in the `tsconfig.json` file.
