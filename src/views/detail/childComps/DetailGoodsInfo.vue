<!--  -->
<template>
    <div class="goods-info" v-if="Object.keys(GoodsInfo).length !== 0">
        <div class="title">
            <p>{{GoodsInfo.title}}</p>
        </div>
        <div class="price">
            <span class="now-price">{{GoodsInfo.price}}</span>
            <span class="old-price">{{GoodsInfo.oldPrice}}</span>
            <span class="discount">{{GoodsInfo.discountDesc}}</span>
        </div>
        <div class="other">
            <span class="sales-volume">{{GoodsInfo.columns[0]}}</span>
            <span class="collection">{{GoodsInfo.columns[1]}}</span>
            <span>{{GoodsInfo.services[GoodsInfo.services.length-1].name}}</span>
        </div>
        <div class="services">
            <span class="servcice-info" v-for="index in GoodsInfo.services.length-1" :key="index">
                <img :src="GoodsInfo.services[index-1].icon" alt="">
                <span>{{GoodsInfo.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailGoodsInfo",
    props: {
        GoodsInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style  scoped>
    .goods-info{
        margin-top:10px;
        border-bottom: 5px solid #f2f5f8;
    }
    .title{
        margin: 0 10px 0 10px
    }
    .price {
        margin: 20px 10px 20px 10px;
    }
    .price .now-price {
        color: var(--color-high-text);
        font-size: 1.5rem;
    }
    .price .old-price {
        margin-left: 9px;
        font-size: .9rem;
        color: #8f8e8e;
        text-decoration: line-through;
    }
    .price .discount {
        margin-left: 9px;
        border-radius:10px;
        background: var(--color-high-text);
        color: #ffffff;
        font-size: .7rem;
        padding: 3px 5px;
        position: relative;
        top: -9px;
    }
    .other {
        display: flex;
        border-bottom: 1px solid rgba(100,100,100,.1);
        padding: 0 0 7px 0;
    }
    .other span {
        flex: 1;
        text-align: center;
        font-size: .8rem;
        color: #8f8e8e;
    }
    .services {
        display: flex;
        line-height: 20px;
        font-size: 12px;
    }
    .services .servcice-info {
        flex: 1;
        padding: 5px 5px 10px 8px;
    }
    .servcice-info img{
        width: 15px;
        height: 15px;
        position: relative;
        top: 3px;
        right: 3px;
    }

</style>
