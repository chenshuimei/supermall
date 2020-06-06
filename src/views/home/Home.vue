<!--  -->
<template>
   <div id="home">
      <nav-tab-bar class="home-nav"><div slot="center">购物街</div></nav-tab-bar>
      <home-swiper :banners="banners"/>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view/>
   </div>
</template>

<script>
import NavTabBar from 'components/common/navtabbar/NavTabBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendViews'
import FeatureView from './childComps/FeatureView'

import {getHomeMulitdata} from 'network/home'
// import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
   name: "home",
   components: {
      NavTabBar,
      HomeSwiper,
      RecommendView,
      FeatureView
   },
   data () {
      return {
         banners: [],
         dKeyword: [],
         keywords: [],
         recommend: []
      }
   },
   created() {
      //1.请求多个数据
      getHomeMulitdata().then(res => {
         console.log(res);
         this.banners = res.data.banner.list;
         this.dKeyword = res.data.dKeyword.list;
         this.keywords = res.data.keywords.list;
         this.recommend = res.data.recommend.list;

      })
   }
}
</script>

<style  scoped>
   .home-nav{
      background-color: var(--color-tint);
      color: #fff
   }
</style>
