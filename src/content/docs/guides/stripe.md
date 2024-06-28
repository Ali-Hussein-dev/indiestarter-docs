---
title: Stripe Setup
description: Learn how to set up Stripe in your Next.js app.
---

## Setup a Stripe Account

1. Go to [Stripe](https://stripe.com) website and sign up for an account.
2. Create a new product in the Stripe dashboard.
3. Create a webhook in the Stripe dashboard.
4. Obtain your API keys (publishable and secret keys). Open the `.env.local` file in the code editor on the right to view the necessary variables: `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

```env
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

## Create Checkout

To customize the checkout session, you can modify the file `app/api/stripe/create-checkout/route.ts`. For example you can change the `ui_mode` from "hosted" to "embedded" to use the embedded checkout flow.

## Create Customer Portal

To customize the checkout session, you can modify the file `app/actions/get-customer-portal.ts`. For example you can change the `ui_mode` from "hosted" to "embedded" to use the embedded checkout flow.

**NOTE**: You can use server actions or API endpoints to create a checkout/customer portal session. It is up to you.
