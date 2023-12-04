<template>
    <div class="">
        <div class="img_link" :style="`background-image: url('${path}')`"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            path: require("../images/122.png"),
        };
    },

    components: {},
};
</script>
<style scoped>
.img_link {
    width: 100vw;
    height: 100vw;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
