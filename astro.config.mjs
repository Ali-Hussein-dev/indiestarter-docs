import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/Ali-Hussein-dev/indiestarter-docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Get started', link: '/guides/get-started/' },
						{ label: 'Why indie starter', link: '/guides/why-indie-starter/' },
					],
				},

				{
					label: 'Configuration',
					items: [
						{ label: 'Global configuration', link: '/guides/global-configuration' },
						{ label: 'Environment Variables', link: '/guides/environment-variables' },
						{ label: 'SEO', link: '/guides/seo' },
					],
				},
				{
					label: 'Architecture',
					items: [{ label: 'Folder Structure', link: '/guides/folder-structure' }],
				},
				{
					label: 'Supabase',
					items: [
						{ label: 'Setup DB', link: '/guides/setup-db' },
						{ label: 'Initialize Supabase', link: '/guides/initialize-supabase' },
						{ label: 'Authentication', link: '/guides/authentication' },
					],
				},
				{
					label: 'Payments Integration',
					items: [
						{ label: 'Stripe', link: '/guides/stripe' },
					],
				},
			],
		}),
	],
});
