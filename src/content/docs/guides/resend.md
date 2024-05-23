---
title: Resend
description: Setup resend
---

## Introduction

Resend enable you to do two things: sending emails (like magic links) and forwarding emails to another email account.

## Resend setup

- Setup a Resend account and get an API key.
- Validate your domain name in Resend
- install the Resend package in your project

```bash
pnpm add resend
```

## Using Resend

Using Resend is pretty straighforward, you can check the example in the repo or head over to the [Resend documentation](https://resend.com/docs/send-with-nextjs)

you can create an API for sending emails or just use it as a function in your API routes.

## Integrate with Supabase

Supabase has a built-in email service that you can use for testing, but it has a rate limit. If you want to go to production, you have to use a third-party service like Resend, Mailgun, Postmark or Sendgrid.

To setup Resend with Supabase, you need to `setting -> authentication -> SMTP Settings` and enable custom SMTP
Supabase has great documentation on how to setup SMTP. You can find it [here](https://supabase.com/docs/guides/auth/auth-smtp)

Once it is setup, Supabase will use it for sending emails such as magic links.

### Bonus

Resend has a React email template library, you can use it to build beautiful email templates. You can find it [here](https://react.email)
