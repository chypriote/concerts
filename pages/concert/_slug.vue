<template>
	<div id="post">
		<div class="background" style="background-image: url('/assets/images/airbourne2010.jpg')"></div>
		<div class="inner">
			<header>
				<h1>{{ post.title }}</h1>
				<h5>
					{% assign m = page.date | date: "%-m" %}
					{{ page.date }}
					{% case m %} {% when '1' %}Janvier {% when '2' %}Février {% when '3' %}Mars {% when '4' %}Avril {% when '5'
					%}Mai {% when '6' %}Juin {% when '7' %}Juillet {% when '8' %}Aout {% when '9' %}Septembre {% when '10'
					%}Octobre {% when '11' %}Novembre {% when '12' %}Décembre {% endcase %}
					{{ page.date }} - {{ page.location }}
				</h5>
			</header>
			{% if page.playlist %} {% assign playlist = page.playlist %} {% jektify playlist %} {% endif %}

			{{ content }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Slug',
	async asyncData({ $content, route }) {
		try {
			const post = await $content('concerts', route.params.slug).fetch()

			console.log(post)
			return { post }
		} catch (e) {
			const post = $content('upcoming', route.params.slug).fetch()
			return { post }
		}
	},
	data: () => ({ page: {} }),
}
</script>

<style scoped>
#post {
	flex-grow: 1;
	position: relative;
	padding: 2em 0;
	background: #444;
	display: flex;
	color: #eee;

	.inner h1 {
		line-height: 1.2;
		margin-bottom: 0.5em;
	}

	.title {
		margin-bottom: 0.5em;
		&:not(:first-of-type) {
			margin-top: 1em;
		}
	}

	header {
		color: #fff;
		margin-bottom: 1em;
	}

	.inner {
		position: relative;
		z-index: 2;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>
