<template>
    <div class="flex_nav">
        <div class="menu" @click="openMenuMet()">
            <span class="inner_block_menu"></span>
            <span class="inner_block_menu center_burg_m"></span>
            <span class="inner_block_menu"></span>
        </div>
        <p class="lago_name">bondarenko</p>
    </div>
    <div class="mtbod">
        <router-view />
    </div>

    <nav class="navigate">
        <transition name="search">
            <div class="search_inp" v-if="openSearch">
                <input placeholder="пуховик..." type="text" />
            </div>
        </transition>
        <div class="navigate_inner">
            <router-link to="/favorite" @click="openSearch = false">
                <div class="item_menu">
                    <Favorite />
                </div>
            </router-link>

            <div class="item_menu" @click="openSearchMet()">
                <Search />
            </div>
            <router-link to="/bascket" @click="openSearch = false">
                <div class="item_menu">
                    <Bascket />
                </div>
            </router-link>
        </div>
    </nav>
    <Transition>
        <div class="open_menu" v-if="openMenu" @click="openSearch = false">
            <div class="wrapper_open_menu">
                <div class="close_btn_menu">
                    <div
                        class="close_btn_inner"
                        @click.self="openMenuMet()"
                    ></div>
                </div>
                <div class="name_log">
                    <div class="open_menu_content">
                        <p>bondarenko</p>
                        <div class="logo">
                            <img src="./images/logo.png" alt="" />
                        </div>
                    </div>
                    <p class="description_log_name">живи стильно</p>
                </div>
                <div class="inner_link">
                    <router-link to="/" @click.self="openMenuMet()"
                        >главная</router-link
                    >
                    <router-link to="/about" @click.self="openMenuMet()"
                        >о нас</router-link
                    >
                    <router-link to="/sponsors" @click.self="openMenuMet()"
                        >спонсоры</router-link
                    >
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import Bascket from "./components/Bascket.vue";
import Favorite from "./components/Favorite.vue";
import Search from "./components/Search.vue";
export default {
    data() {
        return {
            openMenu: false,
            openSearch: false,
        };
    },
    methods: {
        openMenuMet() {
            this.openMenu = !this.openMenu;
        },
        openSearchMet() {
            this.openSearch = !this.openSearch;
        },
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
.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
    transform: translateX(0);
}
.search-enter-active,
.search-leave-active {
    transition: 0.3s ease;
    transform: translateX(0);
}
.search-enter-from,
.search-leave-to {
    opacity: 0;
    transform: translateX(-5%);
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.mtbod {
    margin-top: 52px;
}
.close_btn_menu {
    margin: 20px 0;
}
.close_btn_inner {
    width: 36px;
    height: 36px;
}

.close_btn_inner::before,
.close_btn_inner::after {
    content: "";
    position: absolute;
    top: 35px;
    display: block;
    width: 35px;
    height: 3.5px;
    background: #000;
}

.close_btn_inner::before {
    transform: rotate(45deg);
}

.close_btn_inner::after {
    transform: rotate(-45deg);
}

.flex_nav {
    position: fixed;
    top: 0;
    padding: 14px 30px;
    width: 100%;
    padding-top: 9px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 54px;
    z-index: 10;
}

.logo {
    display: flex;
    align-items: center;
    img {
        width: 52px;
    }
}
.name_log {
    color: rgba(0, 0, 0, 0.36);

    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    p {
        font-weight: 600;
    }
}
.description_log_name {
    padding-left: 22px;
}
.open_menu {
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    .wrapper_open_menu {
        position: absolute;
        width: 90vw;
        height: 100vh;
        background-color: #f8a175;
        padding: 0px 26px;
    }
    .open_menu_content {
        color: #000;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 24px;
        p {
            font-weight: 600;
        }
    }
}

.navigate {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 14px 30px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}
.navigate_inner {
    background-color: #ffffff7d;
    border-radius: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search_inp {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        color: #000;
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        padding: 14px 21px;
        border-radius: 30px;
        border: 3px solid #000;
        width: 100%;
        height: 36px;
    }
}
.lago_name {
    color: #000;

    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.inner_link {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    a {
        padding-left: 20px;
        color: rgba(0, 0, 0);
        text-decoration: none;
        font-weight: 600;
    }
}
@media (min-width: 400px) {
    .navigate {
        p {
            font-size: 24px;
        }
    }

    .item_menu {
        width: 48px;
        padding: 6px;
    }
}
.item_menu {
    width: 48px;
    padding: 6px;
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;
    width: 41px;
}

.inner_block_menu {
    height: 4px;
    width: 100%;
    background: #000;
    border-radius: 2px;
}
.center_burg_m {
    width: 31px;
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
