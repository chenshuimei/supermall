<!--  -->
<template>
   <div id="detail">
       <detail-nav class="detail-nav" @detailNav="detailnavClick" @itemClick="titleClick" :current-index="currentIndex"/>
       <scroll class="content" ref="scroll" 
                :probe-type="3" @scrollPosition="contentScroll">
            <detail-swiper :images="topImage"/>
            <detail-goods-info :goods-info="goodsInfos"/>
            <detail-shop-info :shop-info="shopInfo"/>
            <detail-img-info :detail-info="detailInfo"/>
            <detail-param-info ref="param" :param-info="goodsParamInfo"/>
            <Detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <detail-recommend ref="recommend" :details-recommend="recommend"/>
       </scroll>
       <detail-bottom-bar @addToCart="addCart"/>
   </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'

import scroll from 'components/common/scroll/Scroll'
// import GoodsListInfo from 'components/content/Goods/GoodsList'

import { getDetailData, getRecommend, detailGoods, shop, goodsParamInfo } from "network/detail"
import { debounce } from '../../common/utils'

export default {
    name: "Detail",
    components: {
        DetailNav,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailImgInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommend,
        DetailBottomBar,
        scroll

    },
    data () {
        return {
            iid: null,
            topImage: [],
            goodsInfos: {},
            shopInfo: {},
            detailInfo: {},
            goodsParamInfo: {},
            commentInfo: {},
            recommend: [],
            themeScollY: [],
            getTrueY: null,
            themeTops: [],
            currentIndex: 0
        }
    },
    created() {
        this.iid = this.$route.params.iid

        getDetailData(this.iid).then(res => {
            // console.log(res);
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
            // console.log(this.goodsParamInfo);

            //6.保存评论信息
            if (data.rate.list) {
                this.commentInfo = data.rate.list[0];
            }

            //点击顶部标题跳转到对应标题的内容
            this.$nextTick(() => {
                this.themeScollY = []
                this.themeScollY.push(0)
                this.themeScollY.push(this.$refs.param.$el.offsetTop)
                this.themeScollY.push(this.$refs.comment.$el.offsetTop)
                this.themeScollY.push(this.$refs.recommend.$el.offsetTop)
                console.log(this.themeScollY); 
            })
        })

        //获取Recommend推荐信息
        getRecommend().then(result => {
            this.recommend = result.data.list
            // console.log(this.recommend);
            
        })

    },
    methods: {
        detailnavClick(index) {
            this.$refs.scroll.scroll.scrollTo(0, -this.themeScollY[index], 200)
        },
        contentScroll(position) {
                // 1.监听backTop的显示
            // this.showBackTop = position.y < -BACKTOP_DISTANCE

            // 2.监听滚动到哪一个主题
            this._listenScrollTheme(-position.y)
        },
        _listenScrollTheme(position) {
            let length = this.themeTops.length;
            for (let i = 0; i < length; i++) {
            let iPos = this.themeTops[i];
            /**
             * 判断的方案:
             *  方案一:
             *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
             *    优点: 不需要引入其他的内容, 通过逻辑解决
             *    缺点: 判断条件过长, 并且不容易理解
             *  方案二:
             *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
             *    优点: 简洁明了, 便于理解
             *    缺点: 需要引入一个较大的int数字
             * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
             * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
             */
            if (position >= iPos && position < this.themeTops[i+1]) {
                if (this.currentIndex !== i) {
                    this.currentIndex = i;
                }
                break;
            }
            }
        },
        titleClick(index) {
            console.log(this.themeTops[index]);
            this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
        },

        /**
         * 加入购物车
        */
        addCart() {
            const product = [];
            product.images = this.topImage[0]
            product.title = this.goodsInfos.title
            product.desc = this.goodsInfos.desc
            product.price = this.goodsInfos.realprice
            product.iid = this.iid
            
            //商品添加购物车
            this.$store.commit('addCart', product)
            
        }
        
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
