---
    title: Umami
    description: Learn how to integrate and configure Umami analytics for your project
---

## Umami

To incorporate Umami with your project, begin by setting up a Umami account and acquiring your tracking id. After that, insert the tracking id into your server provider and not `.env.local` file to avoid tracking events in development environment

```env
NEXT_PUBLIC_UMAMI=your_id_here
```
