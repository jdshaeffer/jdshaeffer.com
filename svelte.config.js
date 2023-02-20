import adapter from '@sveltejs/adapter-vercel';
// import { env } from '$env/dynamic/public';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'edge',
			envVarsInUse: [process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY]
		})
	}
};

export default config;
