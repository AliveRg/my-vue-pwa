<template>
    <div class="flex_home">
        <Collection
            v-for="index in Collection"
            :key="index"
            :path="`../img/${index.img}.webp`"
            :name="index.name"
            :description="index.description"
            :route="index.route"
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
                9: {
                    name: "легендарная коллекция ",
                    description: "вспомни лето",
                    img: "9",
                    route: "9",
                },
                2: {
                    name: "зимние аутфиты  ",
                    description: "стильные зимы",
                    img: "2",
                    route: "2",
                },
                3: {
                    name: "Городские Огоньки",
                    description: "Городская Элегантность",
                    img: "3",
                    route: "3",
                },
                4: {
                    name: "Лазурные Грёзы",
                    description: "Прибрежная Сложность",
                    img: "4",
                    route: "4",
                },
                5: {
                    name: "Винтажная Мечта",
                    description: "Временной Шарм",
                    img: "5",
                    route: "5",
                },
                6: {
                    name: "Мистические Луга",
                    description: "Очаровательные Флоры",
                    img: "6",
                    route: "6",
                },
                7: {
                    name: "Шелковые Шепоты",
                    description: "Сияющий Стиль",
                    img: "7",
                    route: "7",
                },
                8: {
                    name: "Гармония Оттенков",
                    description: "Сбалансированная Палитра",
                    img: "8",
                    route: "8",
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
