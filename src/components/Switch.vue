<template>
	<div id="switch-dark-light">
		<input type="checkbox" class="checkbox" v-model="isChecked" id="chk" @change="handleChange"/>
		<label for="chk">
			<img src="/icons/soleil.png" class="fa-sun" />
			<img src="/icons/lune.png" class="fa-moon" />
			<div class="ball"></div>
		</label>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['isChecked'])
  },
  methods: {
    ...mapMutations(['setIsChecked']),
    handleChange() {
      this.setIsChecked(!this.isChecked);
    },
    updateTheme(isChecked) {
      const root_theme = document.querySelector(':root');

      	// Light
		if (isChecked) {
			root_theme.style.setProperty('--main-bg-color', '#f1f1f1');
			root_theme.style.setProperty('--main-font-color', 'rgb(73 87 120)');
			root_theme.style.setProperty('--sans-decoration', '#8296BD');
			root_theme.style.setProperty('--color-blanc', 'rgb(15 23 42)');
			root_theme.style.setProperty('--color-card-border', '#d9d9d9');
			root_theme.style.setProperty('--color-card', '#a7a7a71f');
			root_theme.style.setProperty('--filter-icons', 'brightness(0) saturate(100%) invert(7%) sepia(8%) saturate(4950%) hue-rotate(185deg) brightness(96%) contrast(96%)');
		} else {
			root_theme.style.setProperty('--main-bg-color', 'rgb(15 23 42)');
			root_theme.style.setProperty('--main-font-color', '#93A2B7');
			root_theme.style.setProperty('--sans-decoration', '#8296BD');
			root_theme.style.setProperty('--color-blanc', 'white');
			root_theme.style.setProperty('--color-card-border', '#162344');
			root_theme.style.setProperty('--color-card', '#202a4473');
			root_theme.style.setProperty('--filter-icons', 'brightness(0) saturate(100%) invert(100%) sepia(100%) hue-rotate(0deg)');
		}
    }
  },
  watch: {
    isChecked(newValue) {
      this.updateTheme(newValue);
    }
  },
  mounted() {
    this.updateTheme(this.isChecked);
  }
};
</script>

<style scoped>
	.fa-moon {
		width: 20px;
		position: absolute;
		top: 10%;
		right: 10%;
	}

	.fa-sun {
		width: 20px;
		position: absolute;
		top: 10%;
		left: 5%;
	}

	input[type=checkbox] {
		opacity: 0;
		position: absolute;
	}

	label {
		background-color: var(--color-blanc);
		border-radius: 50px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		height: 26px;
		width: 50px;
		transform: scale(1.5);
	}

	label .ball {
		background-color: var(--main-bg-color);
		border-radius: 50%;
		position: absolute;
		top: 2px;
		left: 2px;
		height: 22px;
		width: 22px;
		transform: translateX(0px);
		transition: transform 0.2s linear;
	}

	input[type=checkbox]:checked + label .ball {
		transform: translateX(24px);
	}
</style>