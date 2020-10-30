<template>
	<div class="wrapper">
		<navbar />
		<main>
			<nuxt />
		</main>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
	name: 'DefaultLayout',
	components: { Navbar },
}
</script>

<style>
.wrapper {
	height: 100vh;
	display: flex;
	flex-direction: column;
}
main {
	flex-grow: 1;
	position: relative;
	padding: calc(var(--navbar-height) + 1rem) 0 2rem;
	background: #eee;
}
</style>
