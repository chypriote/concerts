<template>
	<article class="tile">
		<div class="background-image">
			<img :src="require(`~/assets/images/${concert.image}`)" :alt="concert.title" />
		</div>
		<div class="content">
			<div class="title">{{ concert.title }}</div>
			<div class="subtitle">
				<p>{{ concert.location }}</p>
				<p>{{ concert.date | date }}</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: 'Tile',
	filters: {
		date(date) {
			const MyDate = new Date(date)
			return `${`0${MyDate.getDate()}`.slice(-2)}/${('0' + (MyDate.getMonth() + 1)).slice(-2)}/${MyDate.getFullYear()}`
		},
	},
	props: {
		concert: {
			type: Object,
			required: true,
		},
	},
	head() {
		return {
			title: 'Accueil',
		}
	},
}
</script>

<style scoped>
.background-image {
	transition: transform 0.5s ease;
	position: relative;
	display: block;
	width: 100%;

	img {
		display: block;
		width: 100%;
		height: 250px;
	}

	&::before {
		transition: background-color 0.5s ease, opacity 0.5s ease;
		pointer-events: none;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.8;
	}
}
.content {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: background-color 0.5s ease, transform 0.5s ease;
	border: 0;
	color: #fff;
	text-align: center;
}
.subtitle {
	transition: max-height 0.5s ease, opacity 0.5s ease;
	width: 100%;
	line-height: 1.5;
	opacity: 0;
	max-height: 0;
}
.tile {
	transition: transform 0.75s ease, opacity 0.5s ease;
	position: relative;
	flex: 33.3333% 0 0;
	margin-bottom: 1em;
	padding: 0 0.5em;

	&:nth-of-type(odd) > .background-image::before {
		background-color: #35495e;
	}
	&:nth-of-type(even) > .background-image::before {
		background-color: #5d2d30;
	}
	&:hover {
		.background-image {
			transform: scale(1.1);

			&::before {
				background-color: #1e1c1f;
				opacity: 0.5;
			}
		}
		.subtitle {
			max-height: 15em;
			opacity: 1;
		}
	}
}
.title {
	font-size: 1.1em;
	font-weight: 900;
	line-height: 1.5;
	text-transform: uppercase;
	letter-spacing: 0.25em;
}
</style>
