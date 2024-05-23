import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Docs',
    customCss: ['./src/tailwind.css',],
    social: {
      github: 'https://github.com/Ali-Hussein-dev/indiestarter-docs'
      , discord: "https://discord.gg/gZMBUAvpBU"
    },
    sidebar: [{
      label: 'Getting started',
      items: [
        {
          label: 'Why indie starter',
          link: '/guides/why-indie-starter/'
        }
        , {
          label: 'Installation',
          link: '/guides/installation/'
        },
      ]
    }, {
        label: 'Configuration',
        items: [{
          label: 'Global configuration',
          link: '/guides/global-configuration'
        }, {
          label: 'Environment Variables',
          link: '/guides/environment-variables'
        }, {
          label: 'SEO',
          link: '/guides/seo'
        }]
      }, {
        label: 'Architecture',
        items: [{
          label: 'Folder Structure',
          link: '/guides/folder-structure'
        }]
      }, {
        label: 'Supabase',
        items: [{
          label: 'Setup DB',
          link: '/guides/setup-db'
        }, {
          label: 'Initialize Supabase',
          link: '/guides/initialize-supabase'
        }, {
          label: 'Authentication',
          link: '/guides/authentication'
        }]
      }, {
        label: 'Payments Integration',
        items: [{
          label: 'Stripe',
          link: '/guides/stripe'
        }]
      }, {
        label: 'UI ',
        items: [{
          label: 'Shadcn/UI setup',
          link: '/guides/shadcn'
        }, {
          label: 'TailwindCSS',
          link: '/guides/tailwind-css'
        }, {
          label: 'UI components',
          link: '/guides/components'
        }]
      }, {
        label: 'Mails',
        items: [{
          label: 'Resend',
          link: '/guides/resend'
        }]
      }, {
        label: 'Analytics',
        items: [{
          label: 'Setup',
          link: '/guides/analytics'
        }]
      }]
  }), tailwind(
    {
      applyBaseStyles: false,
    }
  )]
});