---
title: Authentication
nextjs:
  metadata:
    title: Authentication
    description: Learn how to setup authenticate with Supabase.
---


## Before you start

Once you setup your Supabase project and you DB schema, you can start setting up authentication. To get started with authentication, you need to ensure the following:

1. Correct authentication [providers](https://supabase.com/dashboard/project/fzdjbfodwpffldokqknz/auth/providers) are activated in your Supabase project.
2. Set up the default [Redirect URLs](https://supabase.com/docs/guides/auth/concepts/redirect-urls) in your [Supabase dashboard](https://supabase.com/dashboard/project/_/auth/url-configuration).
3. Learn how to manage the email templates in [Supabase](https://supabase.com/docs/guides/auth/auth-email-templates).

## Authentication Providers

The following authentication methods are implemented in pro plan by the Supabase Auth service:

- [Magic links](/guides/authentication#passwordless-email-logins) - [Supabase Docs](https://supabase.com/docs/guides/auth/auth-email-passwordless?queryGroups=language&language=js)
- [Google OAuth](/guides/authentication#google-oauth) - [Supabase Docs](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [GitHub](/guides/authentication#github) - [Supabase Docs](https://supabase.com/docs/guides/auth/social-login/auth-github?queryGroups=language&language=js)

---

### Passwordless email logins

Email logins using Magic Links or One-Time Passwords (OTPs)

Supabase Auth offers a variety of passwordless login options. These methods enable users to sign in without a password, either by clicking a confirmation link or entering a verification code.

Passwordless login can:

- Enhance user experience by eliminating the need for users to create and remember a password.
- Enhance security by minimizing the possibility of password-related security incidents.
- Lessen support load related to password resets and other password-related procedures.

Magic links are a secure way to authenticate users without requiring them to remember a password. When a user signs in with their email address, Supabase sends them an email with a link that they can click to sign in. This link is valid for a short period of time and can only be used once.

Supabase Auth offers two passwordless login methods that use the user's email address:

- [Magic Link](https://supabase.com/docs/guides/auth/auth-email-passwordless?queryGroups=language&language=js#with-magic-link)

- [OTP](https://supabase.com/docs/guides/auth/auth-email-passwordless?queryGroups=language&language=js#with-otp)

Email authentication methods, including Magic Links, are enabled by default.

To learn more about Passwordless email logins, Supabase has a detailed guide available [here](https://supabase.com/docs/guides/auth/auth-email-passwordless?queryGroups=language&language=jsa)

### Google OAuth

Supabase has a [detailed guide](https://supabase.com/docs/guides/auth/social-login/auth-google) on how to setup Google OAuth with Supabase, including how to setup a project in Google Cloud Platform.

### GitHub

To enable GitHub authentication, you need to create a new OAuth application in your GitHub account. You can follow the steps in the [Supabase documentation](https://supabase.com/docs/guides/auth/social-login/auth-github?queryGroups=language&language=js) to set up GitHub authentication.

### Adding more authentication providers

For information on implementing additional authentication methods, you can find more info [Supabase documentation](https://supabase.com/docs/guides/auth/social-login).
