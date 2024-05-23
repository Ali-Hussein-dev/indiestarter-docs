---
title: Installation
description: Learn how to install Indie Starter.
---

## Project setup

This document provides detailed instructions to set up our Nextjs boilerplate, Indie Starter. Follow these steps to expedite your development process with our streamlined processes and features.

## Repository Access

To access the Indie Starter repository, purchase a plan. We offer two options: the Pro plan and the Starter plan. [Learn more about the plans](https://indie-starter.dev/#pricing)

After purchasing a plan, clone the repository using the appropriate command:

For Pro plan:

```bash
git clone https://github.com/Ali-Hussein-dev/indiestarter-pro [YOUR_APP_NAME]

```

For Starter plan:

```bash
git clone https://github.com/Ali-Hussein-dev/indiestarter-starter [YOUR_APP_NAME]

```

## Project Configuration

Use the following command to move into your project directory:

```bash
cd [YOUR_APP_NAME]
```

### Set the Remote Origin

Set the remote origin to your repository using the following command:

```bash
git remote set-url origin [YOUR_REPOSITORY_URL]
```

### Install Dependencies

Install the necessary dependencies with the following command:

```bash
pnpm install
```

### Add environment variables

Copy the `.env.example` file to `.env.local` and fill in the environment variables. Refer to our [Environment Variables](/guides/environment-variables) documentation for more details.

Start the development server with:

```bash
pnpm dev
```
