<template>
    <a :href="link" target="_blank">
        <span :title="text">{{ text }}</span>
        <img src="/icons/arrow_right.svg" alt="Flèche droite" id="arrow_right">
    </a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: "" // Lien par défaut (vide)
        }
    }
};
</script>

<style scoped>
a {
    align-self: flex-start;
    text-decoration: none;
    color: var(--color-blanc);
    margin-left: 4%;
    display: flex;
    gap: 10px;
}

span {
    position: relative;
    overflow: hidden;
    font-weight: bold;
}

span::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-bleu);
    transition: width 0.3s ease-in-out;
}

a:hover span::before {
    width: 100%;
}

img {
    width: 20px;
    transition: transform 0.3s;
    filter: var(--filter-icons);
}

a:hover img {
    transform: translateX(10px);
}
</style>
