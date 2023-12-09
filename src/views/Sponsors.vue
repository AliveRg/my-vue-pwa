<template>
    <div>
        <div class="wrapper">
            <div class="gridTemplate">
                <div class="img">
                    <img src="../images/Ломтик1.png" alt="" />
                </div>
                <div class="img">
                    <img src="../images/log_spon-5.png" alt="" />
                </div>
                <div class="img">
                    <img src="../images/log_spon-4.png" alt="" />
                </div>
                <div class="img">
                    <img src="../images/log_spon-3.png" alt="" />
                </div>
                <div class="img">
                    <img src="../images/log_spon-2.png" alt="" />
                </div>
                <div class="img">
                    <img src="../images/log_spon-1.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Sponsor",
    components: {},
};
</script>

<style scoped lang="scss">
.gridTemplate {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
}
.img {
    img {
        width: 153px;
        filter: blur(5px);
        transition: all 0.3s ease-in-out;
    }
}
.gridTemplate:hover img {
    filter: blur(0px);
}
</style>
