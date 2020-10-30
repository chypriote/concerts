<template>
	<header id="header">
		<nuxt-link to="/" class="logo">
			<span class="title">Concerts</span>
		</nuxt-link>
		<button type="button" @click="show_menu = !show_menu">
			<i class="fa fa-2x fa-bars" />
		</button>
		<transition name="slide">
			<navbar-menu v-show="show_menu" @close="show_menu = false" />
		</transition>
	</header>
</template>

<script>
import NavbarMenu from '~/components/NavbarMenu'
export default {
	name: 'Navbar',
	components: { NavbarMenu },
	data: () => ({ show_menu: false }),
}
</script>

<style scoped>
header {
	background: #fff;
	position: fixed;
	left: 0;
	right: 0;
	z-index: 1000;
	padding: 0 2em;
	display: flex;
	height: var(--navbar-height);
	align-items: center;
	border-bottom: 1px solid #e1e8ed;
}
.logo {
	flex-grow: 1;
	border-bottom: 0;
	font-weight: 900;
	letter-spacing: 0.35em;
	text-decoration: none;
	text-transform: uppercase;
	display: inline-block;
}
nav {
	position: fixed;
	right: 2em;
	top: 2em;
	z-index: 10000;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.45s ease, visibility 0.45s;
}
.slide-enter-to,
.slide-leave {
	visibility: visible;
	transform: translateX(0);
}
.slide-enter,
.slide-leave-to {
	visibility: hidden;
	transform: translateX(22em);
}
</style>
