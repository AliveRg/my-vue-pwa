<template>
    <div class="flex_home">
        <Collection
            v-for="index in 10"
            :key="index"
            :path="`../img/${index}.jpg`"
        ></Collection>
    </div>
</template>

<script>
// @ is an alias to /src
import Collection from "@/components/Collection.vue";

export default {
    name: "HomeView",
    components: {
        Collection,
    },
};
</script>

<style scoped lang="scss">
.flex_home {
    display: flex;
    flex-direction: column;
    gap: 100px;
}
</style>
