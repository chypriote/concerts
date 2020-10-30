<template>
	<div id="menu">
		<header>
			<button id="menu-close" type="button" class="close" @click="$emit('close')">Close</button>
			<h2>Menu</h2>
		</header>
		<div class="inner">
			<ul>
				<template v-for="key in orderedKeys">
					<li :key="key" class="year">{{ key }}</li>
					<li v-for="post in posts[key]" :key="`${key}-${post.slug}`">
						<nuxt-link :to="{ name: 'concert-slug', params: { slug: post.slug } }">{{ post.title }}</nuxt-link>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
import { groupBy } from 'lodash-es'

export default {
	name: 'NavbarMenu',
	data: () => ({ posts: [] }),
	computed: {
		orderedKeys: (_this) => Object.keys(_this.posts).sort().reverse(),
	},
	async mounted() {
		const posts = await this.$content('concerts').sortBy('date', 'desc').fetch()
		this.posts = groupBy(posts, (post) => new Date(post.date).getFullYear())
	},
}
</script>

<style scoped>
#menu {
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	width: 22em;
	max-width: 80%;
	background: #585858;
	color: #fff;
	cursor: default;
	z-index: 10002;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 2em 1em;
	}

	.inner {
		height: 100%;
		padding: 0 2em;
		overflow-y: auto;
	}

	h2 {
		text-align: right;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		li {
			padding: 0;
			text-align: right;

			&.year {
				font-weight: 700;
				border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
				text-align: left;
			}
			a {
				display: block;
				padding-top: 0.5em;
				line-height: 1;
				border: 0;
				color: inherit;
				&:hover {
					color: #f2849e;
				}
			}
		}
	}
}
</style>
