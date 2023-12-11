<template>
    <div class="wrapper_itemBascket" v-if="itemId.clickProduct">
        <div
            class="imgItem"
            :style="'background-image: url(../img/' + itemId.img + '.webp)'"
        ></div>
        <div class="info">
            <div class="nameItem">
                <p>{{ itemId.name }}</p>
            </div>
            <div class="sizeItem">
                <p>Размер:</p>
                <p>{{ itemId.size }}</p>
            </div>
            <div class="priceItem">
                <p>Цена:</p>
                <p>{{ itemId.priceSale }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        itemId: Object,
    },
};
</script>

<style lang="scss" scoped>
.imgItem {
    min-width: 120px;
    height: 140px;
    background-size: cover;
    background-position: center;
}
.wrapper_itemBascket {
    display: flex;
    gap: 32px;
    margin-bottom: 80px;
}
.info {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    color: #000;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;

    line-height: normal;
}
</style>
