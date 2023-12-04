<template>
    <div class="flex_home">
        <Collection
            v-for="index in Collection"
            :key="index"
            :path="`../img/${index.img}.webp`"
            :name="index.name"
            :description="index.description"
        ></Collection>
    </div>
</template>

<script>
// @ is an alias to /src
import Collection from "@/components/Collection.vue";

export default {
    name: "HomeView",
    data() {
        return {
            Collection: {
                1: {
                    name: "легендарная коллекция ",
                    description: "вспомни лето",
                    img: "1",
                },
                2: {
                    name: "зимние аутфиты  ",
                    description: "стильные зимы",
                    img: "2",
                },
                3: {
                    name: "легендарная коллекция ",
                    description: "вспомни лето",
                    img: "3",
                },
            },
        };
    },
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
