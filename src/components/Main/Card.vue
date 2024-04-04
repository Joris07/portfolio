<template>
	<a :href="link" class="card to_slide" target="_blank">
		<div v-if="isImage" class="left-card-img">
			<img class="left_card" :src="dateOrImage" alt="Date ou Image">
		</div>
		<div v-else class="left_card texte_normal">
			<p>{{ dateOrImage }}</p>
		</div>
		<div class="content_card">
			<h3>{{ title }} <img src="/icons/arrow_top.png" alt="Flèche" class="fleche_top"></h3>
			<p class="texte_normal">{{ description }}</p>
			<div class="container_technologies">
			<p v-for="(technology, index) in technologies" :key="index" class="technologie">{{ technology }}</p>
			</div>
		</div>
	</a>
</template>
  
<script>
	export default {
		props: {
			link: {
				type: String,
				required: true
			},
			dateOrImage: {
				type: String,
				required: true
			},
			isImage: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: true
			},
			technologies: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style scoped>
	.card {
		display: flex;
		gap: 3%;
		padding: 20px;
		cursor: pointer;
		text-decoration: none;
		color: var(--main-font-color);
		border: 2px solid transparent;
	}

	.left_card > p {
		margin: 0;
	}

	.card:hover {
		border: 1px solid var(--color-card-border);
		border-radius: 5px;
		background-color: var(--color-card);
	}

	.card:hover h3 {
		color: var(--color-bleu);
	}

	.left_card {
		width: 35%;
		margin: 3px;
		text-align: initial;
	}

	.to_slide {
		transform: translateX(200%);
		transition: transform 1.25s, border 0.5s ease, border-radius 0.5s ease, background-color 0.5s ease;
	}

	.to_slide.slide-in {
		transform: translateX(0);
	}

	.left-card-img {
		width: 35%;
		margin-top: 10px;
	}

	.left-card-img > .left_card {
		width: 75%;
	}

	.content_card {
		width: 100%;
	}

	.content_card > h3 {
		margin: 0;
		color: var(--color-blanc);
		font-size: 20px;
		text-decoration: none;
		font-weight: bold;
	}

	.fleche_top {
		width: 15px;
		transform: scaleX(-1);
	}

	.card .fleche_top {
		transform: translate(0, 0) scaleX(-1);
		transition: transform 0.3s ease-in-out;
		filter: var(--filter-icons);
	}

	.card:hover .fleche_top {
		transform: translate(5px, -5px) scaleX(-1);
		filter: invert(60%) sepia(91%) saturate(6659%) hue-rotate(200deg) brightness(103%) contrast(105%);
	}

	.container_technologies {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.container_technologies > p {
		font-size: 12px;
		font-weight: bold;
	}

	.technologie {
		display: flex;
		color: var(--color-bleu);
		padding: 10px;
		border-radius: 15px;
		border: solid 1px var(--color-bleu);;
		width: fit-content;
		margin: 0;
	}

	@media (max-width: 1600px) {
		.left_card > p {
			text-align: initial;
		}
	}

	@media (max-width: 1100px) {
		.left-card-img > .left_card {
			width: fit-content;
		}
	}

	@media (max-width: 640px) {
		.left-card-img {
			align-self: center;
			width: 100%;
			text-align: center;
		}

		.left_card {
			width: auto;
		}
	}
</style>
  