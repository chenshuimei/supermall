<!--  -->
<template>
   <div id="home">
      <nav-tab-bar class="home-nav"><div slot="center">购物街</div></nav-tab-bar>
      <home-swiper :banners="banners"/>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新品','精选']" class="tab-control" @currentClick="currentVaule"/>
      <goods-list :goods-list="GoodsListData"></goods-list>
      <ul>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendViews'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/Goods/GoodsList'

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
      GoodsList
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
         currentType : 'pop'
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
   computed: {
      GoodsListData() {
         return this.goods[this.currentType].list
      }
   },
   methods: {
      /**
       * 事件监听相关的方法
       */
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
            console.log(res);
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
</style>
