<template>
	<div class="inner">
		<section class="upcoming">
			<header><h2 class="title">A Venir</h2></header>
			<div class="tiles">
				<tile v-for="post in upcoming" :key="post.slug" :concert="post" />
			</div>
		</section>
		<section class="concerts">
			<header><h2 class="title">Passés</h2></header>
			<div class="tiles">
				<tile v-for="post in concerts" :key="post.slug" :concert="post" />
			</div>
		</section>
	</div>
</template>

<script>
import Tile from '~/components/Tile'
export default {
	components: { Tile },
	async asyncData({ $content }) {
		const [concerts, upcoming] = await Promise.all([
			$content('concerts').sortBy('date', 'desc').fetch(),
			$content('upcoming').sortBy('date', 'desc').fetch(),
		])
		return { concerts, upcoming }
	},
}
</script>

<style scoped>
.inner {
	width: 100%;
	max-width: 72rem;
	margin: 0 auto;
}
header {
	padding: 0 0.5rem;
	margin-bottom: 0.5rem;
}
.tiles {
	display: flex;
	flex-wrap: wrap;
	position: relative;
	margin-bottom: 1rem;
}
.title {
	color: #35495e;
	font-size: 1.1rem;
}
</style>
