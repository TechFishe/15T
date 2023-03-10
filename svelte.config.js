import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$lib': 'src/lib',
			'$box': 'src/lib/containers',
			'$audio': 'src/lib/audio',
			'$img': 'src/lib/img',
			'$btn': 'src/lib/btn'
		}
	}
};

export default config;
