<template>
    <div class="catalog-wrapper">
        <div
            class="catalog_item"
            v-for="product in products"
            :key="product.routeItemId"
        >
            <template v-if="product.routeItemId % route.params.id == 0">
                <div
                    @click="product.clickProduct = !product.clickProduct"
                    class="item_img"
                    :style="
                        'background-image: url(../img/' + product.img + '.webp)'
                    "
                >
                    <div v-if="product.clickProduct" class="Inner_img">
                        <p>В корзине</p>
                    </div>
                </div>
                <div class="item_content">
                    <div class="item_name">
                        <p>{{ product.name }}</p>
                    </div>
                    <div class="item_description">
                        <p>Описание:</p>
                        <p>{{ product.description }}</p>
                    </div>
                    <div class="item_size">
                        <p>Размер:</p>
                        <div class="size_change">
                            <span
                                class="item_price"
                                @click="product.size = 'xl'"
                                :class="
                                    product.size == 'xl' ? 'active_size' : ''
                                "
                                >xl</span
                            >
                            <span
                                class="item_price"
                                @click="product.size = 'l'"
                                :class="
                                    product.size == 'l' ? 'active_size' : ''
                                "
                                >l</span
                            >
                            <span
                                class="item_price"
                                @click="product.size = 'm'"
                                :class="
                                    product.size == 'm' ? 'active_size' : ''
                                "
                                >m</span
                            >
                            <span
                                class="item_price"
                                @click="product.size = 's'"
                                :class="
                                    product.size == 's' ? 'active_size' : ''
                                "
                                >s</span
                            >
                            <span
                                class="item_price"
                                @click="product.size = 'xs'"
                                :class="
                                    product.size == 'xs' ? 'active_size' : ''
                                "
                                >xs</span
                            >
                        </div>
                    </div>
                    <div class="price_doble">
                        <p>цена:</p>
                        <div class="price_change">
                            <p class="selaPrice">{{ product.price }}</p>
                            <p>{{ product.priceSale }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {
            route: this.$route,
            products: {
                itemId1: {
                    name: "Легкая Элегантность Блейзера",
                    description:
                        "тот блейзер придает вашему образу легкость и элегантность. Идеально подходит как для деловых встреч, так и для вечерних прогулок.",
                    size: "s",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "1",
                    routeItemId: "1",
                },
                itemId2: {
                    name: "Гармония Джинсовой Куртки",
                    description:
                        "Классическая джинсовая куртка современного дизайна, создающая гармоничный образ в любой ситуации.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "2",
                    routeItemId: "2",
                },
                itemId3: {
                    name: "Энергия Цветных Штанов",
                    description:
                        "Яркие и стильные штаны, придающие вашему настроению и образу дополнительную энергию.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "3",
                    routeItemId: "3",
                },
                itemId4: {
                    name: "Современная Классика Платья",
                    description:
                        "Элегантное и стильное платье, сочетающее в себе элементы современного дизайна и классической красоты.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "4",
                    routeItemId: "4",
                },
                itemId5: {
                    name: "Спортивная Элегантность Худи",
                    description:
                        " Сочетание спортивного стиля и элегантности в этом удобном худи, идеальном для активного отдыха.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "5",
                    routeItemId: "5",
                },
                itemId6: {
                    name: "Черная Магия Пальто",
                    description:
                        "Стильное пальто с магическими деталями для тех, кто стремится выделиться. Придайте своему образу загадочности.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "6",
                    routeItemId: "6",
                },
                itemId7: {
                    name: "Ультра-Модный Шарф",
                    description:
                        " Этот шарф не только согреет вас в холодное время года, но и станет визитной карточкой вашего стиля.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "7",
                    routeItemId: "7",
                },
                itemId8: {
                    name: "Эко-Кожаная Куртка",
                    description:
                        "Современная и стильная куртка из эко-кожи подчеркнет вашу ответственность перед природой, сохраняя элегантность.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "8",
                    routeItemId: "8",
                },
                itemId9: {
                    name: "Винтажные Джинсы с Вырезами",
                    description:
                        "Добавьте в свой гардероб дух винтажа с этими стильными джинсами, украшенными оригинальными вырезами.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "9",
                    routeItemId: "9",
                },
                itemId10: {
                    name: "Комфорт Леггинсов с Мешком",
                    description:
                        "Леггинсы, которые сочетают в себе максимальный комфорт и стиль, благодаря уникальному дизайну с мешковиной.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "10",
                    routeItemId: "10",
                },
                itemId11: {
                    name: "Элегантный Шик Блузки",
                    description:
                        "Подчеркните свою женственность с этой стильной блузкой, которая сочетает в себе элегантность и утонченность.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "11",
                    routeItemId: "11",
                },
                itemId12: {
                    name: "Спортивная Легкость Толстовки",
                    description:
                        "Энергичная и удобная толстовка, созданная для активных людей, готовых воплотить свои идеи в движение.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "12",
                    routeItemId: "12",
                },
                itemId13: {
                    name: "Городская Графика Футболки",
                    description:
                        "Футболка с оригинальным дизайном, отражающим дух городской жизни. Сделайте свой стиль неповторимым.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "13",
                    routeItemId: "13",
                },
                itemId14: {
                    name: "Повседневная Классика Поло",
                    description:
                        "Классическое поло с современным акцентом. Прекрасный выбор для повседневного стиля с ноткой элегантности.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "14",
                    routeItemId: "14",
                },
                itemId15: {
                    name: "Тепло Зимы Шарфа-Шейли",
                    description:
                        "Шарф-шейла, который не только согреет в холод, но и станет стильным акцентом в вашем зимнем гардеробе.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "15",
                    routeItemId: "15",
                },
                itemId16: {
                    name: "Легкие Летние Шорты",
                    description:
                        "Шорты, созданные для лета и свободы движения. Прекрасный выбор для ярких и солнечных дней.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "16",
                    routeItemId: "16",
                },
                itemId17: {
                    name: "Классический Пиджак Деловой Женщины",
                    description:
                        "Стильный и деловой пиджак, который подчеркнет вашу профессиональную уверенность и стиль.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "17",
                    routeItemId: "17",
                },
                itemId18: {
                    name: "Трендовые Джоггеры",
                    description:
                        "Джоггеры с ярким дизайном для тех, кто следит за последними трендами и ценит комфорт.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "18",
                    routeItemId: "18",
                },
                itemId19: {
                    name: "Эко-Мода Сумочки",
                    description:
                        "Сумочки из экологически чистых материалов, подчеркивающие ваше стремление к ответственному потреблению.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "19",
                    routeItemId: "19",
                },
                itemId20: {
                    name: "Теплые Зимние Носки",
                    description:
                        "Носки, созданные для тепла и уюта в самые холодные дни. Сочетание комфорта и стильного дизайна.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "20",
                    routeItemId: "20",
                },
                itemId21: {
                    name: "Сияние Стразового Коктейльного Платья",
                    description:
                        "Очаровательное платье с блеском страз, создающее неповторимый светящийся эффект на любом вечеринке.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "21",
                    routeItemId: "21",
                },
                itemId22: {
                    name: "Арт-Коллекция Графичных Джинсов",
                    description:
                        "Джинсы, становящиеся холстом для вашего стиля. Уникальные графические элементы делают каждый образ уникальным.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "22",
                    routeItemId: "22",
                },
                itemId23: {
                    name: "Куртки с Водоотталкивающим Эффектом",
                    description:
                        " Ультрасовременные куртки из экологически чистых материалов с водоотталкивающим покрытием для стильной защиты от погоды.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "23",
                    routeItemId: "23",
                },
                itemId24: {
                    name: "Легкость Льняного Платья",
                    description:
                        "Льняное платье, придающее вашему образу легкость и свежесть в жаркие летние дни.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "24",
                    routeItemId: "24",
                },
                itemId25: {
                    name: "Элегантный Шерстяной Пиджак",
                    description:
                        " Классический пиджак из натуральной шерсти для тех, кто ценит элегантность и тепло в холодные дни.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "25",
                    routeItemId: "25",
                },
                itemId26: {
                    name: "Тенденция Грубой Ткани Джемпера",
                    description:
                        " Джемпер с грубым плетением, идеальный выбор для создания стильного образа в холодное время года.",
                    size: "m",
                    clickProduct: false,
                    price: 8990,
                    priceSale: 7990,
                    img: "26",
                    routeItemId: "26",
                },
            },
        };
    },
    props: {},
    methods: {
        sourse() {},
    },
    components: {},
};
</script>
<style lang="scss" scoped>
.catalog-wrapper {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
}
.catalog_item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
}

.item_img {
}
.Inner_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.32);
    p {
        color: aliceblue;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }
}
.item_name {
    p {
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }
}
.size_change {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
}
.item_price {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    border: solid 1px transparent;
    border-radius: 100%;
}
.price_doble {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 10px;
}
.price_change {
    display: flex;
    gap: 20px;
}
.selaPrice {
    text-decoration: line-through;
}
.active_size {
    border-color: #000;
}
.item_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.item_img {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
}
.item_description {
    height: 105px;
    overflow: scroll;
}
@media (min-width: 400px) {
    .item_img {
        height: 280px;
        width: 50%;
    }
    .catalog_item {
        flex-direction: row;
    }
    .item_content {
        width: 45%;
    }
}
</style>
