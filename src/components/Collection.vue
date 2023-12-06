<template>
    <router-link :to="`/catalogView/${route}`" class="wrapper_collectoin">
        <div class="img_link" :style="'background-image: url(' + path + ')'">
            <div class="title_collection">
                <p class="title_collection_inner">{{ name }}</p>
                <p class="title_collection_inner">“{{ description }}”</p>
                <div class="brend_static">TASTE</div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        path: String,
        name: String,
        description: String,
        route: String,
    },

    components: {},
};
</script>
<style scoped lang="scss">
.wrapper_collectoin {
    box-shadow: 0px -7px 49px 0px rgba(0, 0, 0, 0.25);
    text-decoration: none;
}
.img_link {
    width: 100vw;
    height: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: end;
    justify-content: center;
    backdrop-filter: brightness(25%);
}
.title_collection {
    width: 245px;
    background-color: #fff;
    position: relative;
    transform: translateY(50%);
    box-shadow: 0px 2px 6.3px 0px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    padding: 7px 9px;
    padding-bottom: 20px;
    .title_collection_inner {
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
    }
}
.brend_static {
    position: absolute;
    bottom: 3px;
    right: 5px;
    color: #000;

    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 800;
}
</style>
