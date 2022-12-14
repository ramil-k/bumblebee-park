import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import adapter from '@sveltejs/adapter-static';
import postcssOKLabFunction from '@csstools/postcss-oklab-function';

const postcss = { plugins: [postcssOKLabFunction] };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: seqPreprocessor([preprocess({ postcss }), preprocessThrelte()]),
	kit: {
		adapter: adapter({
			precompress: true
		})
	}
};

export default config;
