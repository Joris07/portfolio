<script>
	import Card from './Card.vue';
	export default {
		components: {
            Card
        },
	};
</script>

<template>
	<div id="experience" class="observer">
		<Card
			link="https://www.edissio.fr/"
			:dateOrImage="$t('main.experiences.edissio.date')"
			:isImage="false"
			:title="$t('main.experiences.edissio.title')"
			:description="$t('main.experiences.edissio.description')"
			:technologies="['Symfony', 'WordPress', 'VueJS', 'CSS', 'MySQL']"
		/>
		
		<Card
			link="https://lgc.fr/"
			:dateOrImage="$t('main.experiences.lgc.date')"
			:isImage="false"
			:title="$t('main.experiences.lgc.title')"
			:description="$t('main.experiences.lgc.description')"
			:technologies="['C#', 'WPF', 'VBA', 'PostgreSQL']"
		/>
	</div>
</template>

<style scoped>
	#experience {
		row-gap: 20px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	@media (max-width: 1100px) {	
		#experience > .card {
			display: block;
		}
	}
</style>