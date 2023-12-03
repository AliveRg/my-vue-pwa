<template>
    <router-view />
    <nav class="navigate">
        <div class="menu">
            <span class="inner_block_menu"></span>
            <span class="inner_block_menu"></span>
            <span class="inner_block_menu"></span>
        </div>
        <router-link to="/favorite">
            <Favorite />
        </router-link>
        <p class="">bondarenko</p>
        <Search />
        <router-link to="/bascket">
            <Bascket />
        </router-link>
    </nav>
</template>

<script>
import Bascket from "./components/Bascket.vue";
import Favorite from "./components/Favorite.vue";
import Search from "./components/Search.vue";
export default {
    data() {
        return {};
    },
    components: {
        Bascket,
        Favorite,
        Search,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

.navigate {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 14px 30px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    p {
        color: #000;

        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}
.inner_block_menu {
    height: 3.5px;
    width: 35px;
    background: #000;
}

/* color palette from <https://github.com/vuejs/theme> */
:root {
    --vt-c-white: #ffffff;
    --vt-c-white-soft: #f8f8f8;
    --vt-c-white-mute: #f2f2f2;

    --vt-c-black: #181818;
    --vt-c-black-soft: #222222;
    --vt-c-black-mute: #282828;

    --vt-c-indigo: #2c3e50;

    --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
    --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
    --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
    --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

    --vt-c-text-light-1: var(--vt-c-indigo);
    --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
    --vt-c-text-dark-1: var(--vt-c-white);
    --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

.transitionSetting {
    transition: all 0.2s ease-in-out;
}

/* semantic color variables for this project */
:root {
    --color-background: var(--vt-c-white);
    --color-background-soft: var(--vt-c-white-soft);
    --color-background-mute: var(--vt-c-white-mute);

    --color-border: var(--vt-c-divider-light-2);
    --color-border-hover: var(--vt-c-divider-light-1);

    --color-heading: var(--vt-c-text-light-1);
    --color-text: var(--vt-c-text-light-1);

    --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-background: var(--vt-c-black);
        --color-background-soft: var(--vt-c-black-soft);
        --color-background-mute: var(--vt-c-black-mute);

        --color-border: var(--vt-c-divider-dark-2);
        --color-border-hover: var(--vt-c-divider-dark-1);

        --color-heading: var(--vt-c-text-dark-1);
        --color-text: var(--vt-c-text-dark-2);
    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: normal;
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    color: var(--color-text);
    background: var(--color-background);
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
