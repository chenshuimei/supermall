<!--  -->
<template>
   <div id="detail">
       <detail-nav class="detail-nav"/>
       <scroll class="content">
            <detail-swiper :images="topImage"/>
            <detail-goods-info :goods-info="goodsInfos"/>
            <detail-shop-info :shop-info="shopInfo"/>
            <detail-img-info :detail-info="detailInfo"/>
            <detail-param-info :param-info="goodsParamInfo"/>
       </scroll>
   </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import scroll from 'components/common/scroll/Scroll'

import { getDetailData, detailGoods, shop, goodsParamInfo } from "network/detail"

export default {
    name: "Detail",
    components: {
        DetailNav,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailImgInfo,
        DetailParamInfo,
        scroll

    },
    data () {
        return {
            iid: null,
            topImage: [],
            goodsInfos: {},
            shopInfo: {},
            detailInfo: {},
            goodsParamInfo: {}
        }
    },
    created() {
        this.iid = this.$route.params.iid

        getDetailData(this.iid).then(res => {
            console.log(res);
            const data = res.result
            //1.获取顶部轮播图信息
            this.topImage = data.itemInfo.topImages
            
            //2.获取商品详细信息
            this.goodsInfos = new detailGoods(data.itemInfo, data.columns, data.shopInfo.services)

            //3.获取店铺信息
            this.shopInfo = new shop(data.shopInfo)
            

            //4.获取商品详情图片信息
            this.detailInfo = data.detailInfo
            

            //5.获取商品参数信息
            this.goodsParamInfo = new goodsParamInfo(data.itemParams.info, data.itemParams.rule)
            console.log(this.goodsParamInfo);
        })
    }
}
</script>

<style  scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #ffff;
        height: 100vh;
    }
    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    .content{
        height: calc(100% - 44px);
    }
</style>
