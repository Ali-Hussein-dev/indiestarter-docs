---
title: Authentication
description: Learn how to authenticate with Supabase.
---

**Magic links**, **GitHub**, and **Google OAuth** authentication methods have been incorporated. For information on implementing additional authentication methods, please consult the [Supabase documentation](https://supabase.com/docs/guides/auth).

Before commencing, ensure the following:

1. Correct authentication providers are activated in your Supabase project.
2. Set up the default redirect URL for cases without a specified or matched redirect URL. This value is also a variable in email templates. [extra info](https://supabase.com/docs/guides/auth/concepts/redirect-urls)
3. (If desired) Customize the email templates for your email service provider. [additional details](https://supabase.com/docs/guides/auth/auth-email-templates)
