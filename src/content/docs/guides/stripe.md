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

## Webhook endpoint

To align the latest subscription status and details with your database, I built a webhook to monitor events from Stripe's API.

Modify your webhook under the path /app/api/webhooks/stripe/route.ts and configure actions for certain events – like updating the DB or sending emails. Stripe has so many events that you can listen to, you can find the full list [here](https://stripe.com/docs/api/events/types). The most common events are `checkout.session.completed` and `customer.subscription.updated`.

## Test your integration locally

1. Enable Test mode in Stripe
2. fist you need to have Stripe CLI installed on your machine. You can find the installation instructions [here](https://stripe.com/docs/stripe-cli).
3. login to your Stripe account using the following command: `stripe login`
4. Run the following command to start the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Make sure everythings is working as expected and use console.log to debug your code.

### Examples of errors

1. Environment variables not set
2. `price_id` not correct
3. `success_url` and `cancel_url` not set
