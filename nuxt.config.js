export default {
	target: 'static',
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
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
	modules: ['@nuxtjs/pwa', '@nuxt/content'],
	content: {},
	build: {
		transpile: ['lodash-es'],
		postcss: {
			plugins: {
				'postcss-nested': {},
			},
		},
	},
}
