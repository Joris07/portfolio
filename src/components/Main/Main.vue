<script>
	import Switch from '../Switch.vue';
	import Experience from './Experience.vue';
	import Link from './Link.vue';
	import Projets from './Projets.vue';
	import Photo from './Photo.vue';
	import Trad from '../Trad.vue';
	import store from '@/store/store.js';
	import { mapState } from 'vuex';

	export default {
		components: {
			Switch,
			Experience,
			Link,
			Projets,
			Trad,
			Photo
		},
		computed: {
			...mapState(['isFlipped', 'isChecked'])
		},
		methods: {
			handleTradFlip(isFlipped) {
				store.commit('setFlipped', isFlipped);
			}
		},
	};
</script>

<template>
	<main>
		<div id="trad-switch">
			<div id="trad"><Trad :isFlipped="isFlipped" @flip="handleTradFlip" /></div>
			<div id="switch-dark-light-main"><Switch /></div>
		</div>
		<Photo />
		<h2 class="show_after">{{ $t('header.menu.about') }}</h2>
		<div>
			<p>{{ $t('header.propos.partie1') }}</p>
			<p>{{ $t('header.propos.partie2') }}</p>
			<p>{{ $t('header.propos.partie3') }}</p>
		</div>
		<h2 class="show_after">{{ $t('header.menu.experience') }}</h2>
		<Experience />
		<Link :text="$t('main.cv')" link="/portfolio/icons/CV_GourdonJoris.pdf" />
		<h2 class="show_after">{{ $t('header.menu.projets') }}</h2>
		<Projets />
		<Link :text="$t('main.repo')" link="https://github.com/Joris07?tab=repositories" />
	</main>
</template>

<style scoped>
	main {
		width: 55%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		overflow-x: hidden;
	}

	#trad-switch {
		display: flex;
		flex-direction: row;
		align-self: flex-end;
		gap: 100px;
		margin-top: 10px;
		margin-right: 15px;
	}

	#trad {
		display: block;
	}

	#switch-dark-light-main {
		display: block;
		z-index: 99;
	}

	.show_after {
		display: none;
	}

	@media (max-width: 1100px) {
		main {
			width: auto;
		}
		.show_after {
			display: block;
			align-self: self-start;
			color: var(--color-bleu);
			font-size: .875rem;
		}

		#switch-dark-light-main {
			display: none;
		}

		#trad {
			display: none;
		}
	}
</style>
