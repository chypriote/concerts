export default {
	target: 'static',
	telemetry: false,
	head: {
		titleTemplate: (titleChunk) => `${titleChunk} - ConcertsV2`,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: ['normalize.css/normalize.css', '~/assets/app.css'],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxt/postcss8',
		['@nuxtjs/eslint-module', { cache: true }],
		// '@nuxtjs/stylelint-module'
	],
	modules: [
		'@nuxtjs/pwa',
		'@nuxt/content',
		'@nuxtjs/component-cache'
	],
	content: {},
	build: {
		transpile: ['lodash-es'],
		optimization: {
			splitChunks: {
				chunks: 'all',
				automaticNameDelimiter: '.',
				maxSize: 256000,
			},
		},
		extend (config) {
			config.resolve.alias.vue = 'vue/dist/vue.esm.js'
		},
		postcss: {
			plugins: {
				'postcss-nested': {},
			},
		},
	},
}
