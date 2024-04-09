<script>
    import Switch from '../Switch.vue';
    import Nav from './Nav.vue';
    import Logo from './Logo.vue';
    import Trad from '../Trad.vue';
    import store from '@/store/store.js';
    import { mapState } from 'vuex';

    export default {
        components: {
            Switch,
            Nav,
            Logo,
            Trad
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
    <header>
        <div id="menu">
            <div id="top">
                <h1>{{ $t('header.moi') }}</h1>
                <div id="trad-switch">
                    <div id="trad"><Trad :isFlipped="isFlipped" @flip="handleTradFlip" /></div>
                    <div id="switch-dark-light"><Switch /></div>
                </div>
            </div> 
            <h2>{{ $t('header.poste') }}</h2>
            <p>{{ $t('header.devise') }}</p>
            <Nav />
        </div>
        <Logo />
    </header>
</template>

<style scoped>
    #switch-dark-light {
	  	display: none;
	}

    #trad-switch {
		display: flex;
		flex-direction: row;
		align-self: flex-end;
		gap: 100px;
	}

    #trad {
        display: none;
    }

    #menu > #top > h1 {
        text-decoration: none;
        color: var(--color-blanc);
        font-size: 3rem;
    }

    header {
        left: 16%;
        width: 25%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20%;
        position: fixed;
    }

    #menu {
        font-weight: bold;
    }

    h1  {
        margin: 0;
    }

    h1 {
        text-decoration: none;
        color: var(--color-blanc);
        font-size: 3rem;
    }

    h2 {
        color: var(--color-blanc);
        font-size: 1.125rem;
    }

    #top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1100px) {
        header {
            position: relative;
            width: auto;
            left: auto;
            gap: 0px;
        }
        
        #menu {
            width: 100%;
        }

		#switch-dark-light {
			position: static;
			display: block;
		}

        #trad {
            position: static;
			display: block;
        }

        #trad-switch {
            margin-bottom: 25px;
        }
    }

    @media (max-width: 500px) {
        #trad-switch {
            display: flex;
            flex-direction: column-reverse;
            gap: 50px;
            margin-bottom: 46px;
        }
    }
</style>