<!--  -->
<template>
   <div id="home">
      <nav-tab-bar class="home-nav"><div slot="center">购物街</div></nav-tab-bar>
      <scroll class="content" 
               ref="scroll" 
               :probe-type="3" 
               @scrollPosition="positionData" 
               :pull-upload="true"
               @pullingUp="loadMore">
         <home-swiper :banners="banners"/>
         <recommend-view :recommend="recommend"></recommend-view>
         <feature-view/>
         <tab-control :titles="['流行','新品','精选']" class="tab-control" @currentClick="currentVaule"/>
         <goods-list :goods-list="GoodsListData"></goods-list>
      </scroll>
      <back-top @click.native="clickTop" v-show="isShow"/>
   </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendViews'
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/Goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll' 
import BackTop from 'components/content/backTop/BackTop'

import NavTabBar from 'components/common/navtabbar/NavTabBar'

import {getHomeMulitdata, getHomeGoods} from 'network/home'



export default {
   name: "home",
   components: {
      NavTabBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
   },
   data () {
      return {
         banners: [],
         dKeyword: [],
         keywords: [],
         recommend: [],
         goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []}
         },
         currentType : 'pop',
         isShow: false
      }
      
   },
   created() {
      //1.请求多个数据
      this.getHomeMulitdata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
   },
   mounted() {
      //监听图片加载完成
      const refresh = this.debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('imageLoad', () => {
         refresh()
      })
   },
   computed: {
      GoodsListData() {
         return this.goods[this.currentType].list
      }
   },
   methods: {
      /**
       * 事件监听相关的方法
       */

      //防抖动,目的是当所有产品图片加载完之后才执行refresh。这样就不会频繁执行refresh()函数，提高性能
      debounce(func, delay) {
         let timer = null
         return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
               func.apply(this, args)
            }, delay)
         }
      },
      currentVaule(index) {
         // console.log(index);
         switch (index) {
            case 0:
               this.currentType = 'pop';
               break;
            case 1:
               this.currentType = 'new';
               break;   
            case 2:
               this.currentType = 'sell';
               break;
         }
      },

      /**
       * 点击回到顶部
       */
      clickTop() {
         // this.$refs.scroll.scroll.scrollBackTop(0, 0)
         this.$refs.scroll.scrollBackTop(0, 0)
      },

      /**
       * 监听产品信息向下滚到1000时，backTop按钮才显示
       */
      positionData(position) {
         this.isShow = (-position.y) > 1000
      },
      /**
       * 监听上拉加载更多
       */
      loadMore() {
         // console.log('上拉加载');
         this.getHomeGoods(this.currentType)
         this.$refs.scroll.finishPullUp()
      },




      /**
       * 网路请求相关的方法
       */
      getHomeMulitdata() {
         getHomeMulitdata().then(res => {
            // console.log(res);
            this.banners = res.data.banner.list;
            this.dKeyword = res.data.dKeyword.list;
            this.keywords = res.data.keywords.list;
            this.recommend = res.data.recommend.list;
         })
      },
      getHomeGoods(type) {
         const page = this.goods[type].page + 1;
         getHomeGoods(type, page).then(res => {
            // console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            
         })
      }
         
   }
}
</script>

<style  scoped>
   #home{
      padding-top: 44px;
      height: 100vh;
      position: relative;
   }
   .home-nav{
      background-color: var(--color-tint);
      color: #fff;
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      z-index: 9;
   }
   .tab-control{
      position: sticky;
      top: 44px;
      background: #fff;
      z-index: 9;
   }
   .content{
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
   }
</style>
