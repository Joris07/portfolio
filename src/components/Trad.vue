<template>
    <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
        <div class="content">
            <div class="front">
                <img src="/icons/france.png" alt="France">
            </div>
            <div class="back">
                <img src="/icons/anglais.png" alt="Anglais">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['isFlipped', 'language'])
    },
    methods: {
        ...mapMutations(['setLanguage']),
        flipCard() {
            this.$emit('flip', !this.isFlipped);
            const language = this.isFlipped ? "en" : "fr";
            this.setLanguage(language);
            this.$i18n.locale = language;
        }
    }
};
</script>
  
<style scoped>
    .card {
        position: relative;
        perspective: 1000px;
        bottom: 12px;
        cursor: pointer;
    }
  
    .card .content {
        position: absolute;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }
    
    .card .front,
    .card .back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
    }
    
    .card .front {
        transform: rotateY(0deg);
    }
    
    .card .back {
        transform: rotateY(180deg);
    }
    
    .card.flipped .content {
        transform: rotateY(180deg);
    }
</style>
  