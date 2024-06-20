<script>
	import Card from './Card.vue';
	export default {
		components: {
            Card
        },
	};
</script>

<template>
	<div id="projets" class="observer">
		<Card
            link="https://tcbotzchaudron.go.yj.fr/"
            dateOrImage="/portfolio/icons/tennis.png"
            :isImage="true"
            :title="$t('main.projets.tcbc.title')"
            :description="$t('main.projets.tcbc.description')"
            :technologies="['WordPress']"
        />
        <Card
            link="https://github.com/Joris07/cowaf"
            dateOrImage="/portfolio/icons/cowaf.png"
            :isImage="true"
            :title="$t('main.projets.cowaf.title')"
            :description="$t('main.projets.cowaf.description')"
            :technologies="['VueJS', 'Symfony', 'MySQL', 'Docker', 'DevOps']"
        />
        <Card
            link="https://github.com/poupardm/extension-anti-phobie"
            dateOrImage="/portfolio/icons/phobie.png"
            :isImage="true"
            :title="$t('main.projets.phobie.title')"
            :description="$t('main.projets.phobie.description')"
            :technologies="['Python', 'Flask']"
        />
	</div>
</template>

<style scoped>
	#projets {
		display: flex;
		flex-direction: column;
		row-gap: 20px;
	}

	@media (max-width: 640px) {
        #projets > .card {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>