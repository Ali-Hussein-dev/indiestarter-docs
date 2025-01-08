---
title: Installation Guide
description: A comprehensive guide to installing and setting up Indie Starter for your project.
---

## Overview

Welcome to the Indie Starter installation guide. This document outlines the steps to set up the Indie Starter Next.js boilerplate and Indie directory template, designed to kickstart your development with a suite of streamlined processes and features.

## Getting Started

### Access the Repository

To begin, you'll need access to the Indie Starter repository. For more information and to choose the plan that's right for you, visit our [templates page](https://indie-starter.dev/templates).

### Clone the Repository

Once you've selected a plan, clone the repository to your local machine using the command corresponding to your chosen plan:

- **Pro Plan**

  ```bash
  git clone https://github.com/Ali-Hussein-dev/indiestarter-pro [YOUR_APP_NAME]
  ```

- **Starter Plan**

  ```bash
  git clone https://github.com/Ali-Hussein-dev/indiestarter-starter [YOUR_APP_NAME]
  ```

- **Indie Directory**

  ```bash
  git clone https://github.com/Ali-Hussein-dev/indiestarter-starter [YOUR_APP_NAME]
  ```

Replace `[YOUR_APP_NAME]` with the desired name for your project.

## Set Up Your Project

### Navigate to Your Project Directory

Change into your project directory with the following command:

```bash
cd [YOUR_APP_NAME]
```

### Configure the Remote Origin

Set the remote origin to point to your repository:

```bash
git remote set-url origin [YOUR_REPOSITORY_URL]
```

Ensure you replace `[YOUR_REPOSITORY_URL]` with the URL of your own repository.

### Install Dependencies

Install all necessary dependencies by running:

```bash
pnpm install
```

### Set Up Environment Variables

Copy the `.env.example` file to `.env.local` and update it with your specific environment variables. For detailed instructions on each variable, refer to our [Environment Variables guide](/guides/environment-variables).

### Run the Development Server

Start your development server to see your project in action:

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser to view your project.

---

Congratulations! You've successfully set up Indie Starter for your project. For further customization and advanced features, explore our documentation.
