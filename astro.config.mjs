import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://docs.indie-starter.dev",
  integrations: [
    starlight({
      title: "Docs",
      logo: {
        dark: "./src/assets/logo.svg",
        light: "./src/assets/logo.svg",
      },
      favicon: "./favicon.ico",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/Ali-Hussein-dev/indiestarter-docs",
        discord: "https://discord.gg/gZMBUAvpBU",
      },
      sidebar: [
        {
          label: "Getting started",
          collapsed: true,
          items: [
            {
              label: "Why indie starter",
              link: "/guides/why-indie-starter/",
            },
            {
              label: "Installation",
              link: "/guides/installation/",
            },
          ],
        },
        {
          label: "Configuration",
          collapsed: true,
          items: [
            {
              label: "Global configuration",
              link: "/guides/global-configuration",
            },
            {
              label: "Environment Variables",
              link: "/guides/environment-variables",
            },
            {
              label: "SEO",
              link: "/guides/seo",
            },
            {
              label: "Scripts",
              link: "/guides/scripts",
            },
          ],
        },
        {
          label: "Architecture",
          collapsed: true,
          items: [
            {
              label: "Folder Structure",
              link: "/guides/folder-structure",
            },
          ],
        },
        {
          label: "Supabase",
          collapsed: true,
          items: [
            {
              label: "Setup DB",
              link: "/guides/setup-db",
            },
            {
              label: "Initialize Supabase",
              link: "/guides/initialize-supabase",
            },
            {
              label: "Authentication",
              link: "/guides/authentication",
            },
          ],
        },
        {
          label: "Payments Integration",
          collapsed: true,
          items: [
            {
              label: "Stripe setup",
              link: "/guides/stripe",
            },
            {
              label: "Stripe webhooks",
              link: "/guides/stripe-webhooks",
            },
          ],
        },
        {
          label: "UI ",
          collapsed: true,
          items: [
            {
              label: "Shadcn/UI setup",
              link: "/guides/shadcn",
            },
            {
              label: "TailwindCSS",
              link: "/guides/tailwind-css",
            },
            {
              label: "UI components",
              link: "/guides/components",
            },
          ],
        },
        {
          label: "Mails",
          collapsed: true,
          items: [
            {
              label: "Resend",
              link: "/guides/resend",
            },
          ],
        },
        {
          label: "Analytics",
          collapsed: true,
          items: [
            {
              label: "Setup",
              link: "/guides/analytics",
            },
          ],
        },
      ],
      plugins: [starlightThemeRapide()]
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
