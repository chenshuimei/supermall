<!--  -->
<template>
   <div id="home">
      <nav-tab-bar class="home-nav"><div slot="center">购物街</div></nav-tab-bar>
      <tab-control 
            :titles="['流行','新品','精选']"
            @currentClick="currentVaule" 
            ref="tabControl1"
            class="tabCon"
            v-show="isFixed"/>
      <scroll class="content" 
               ref="scroll" 
               :probe-type="3" 
               @scrollPosition="positionData" 
               :pull-upload="true"
               @pullingUp="loadMore">
         <home-swiper :banners="banners" @swiperImageLoad="homeSwiperImageLoad"/>
         <recommend-view :recommend="recommend"></recommend-view>
         <feature-view/>
         <tab-control 
            :titles="['流行','新品','精选']"
            @currentClick="currentVaule" 
            ref="tabControl2"
            :class="{fixed: isFixed}"/>
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
import {debounce} from '../../common/utils.js'



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
         isShow: false,
         tabOffsetTop: 0,
         isFixed: false,
         saveY: 0
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
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('imageLoad', () => {
         refresh()
      })
      
   },
   computed: {
      GoodsListData() {
         return this.goods[this.currentType].list
      },
      activated() {
         this.$refs.scroll.scrollTo(0, this.saveY, 0)
         this.$refs.scroll.refresh()
      },
      deactivated() {
         this.saveY = this.$refs.scroll.getScrollY()
      }
   },
   methods: {
      /**
       * 事件监听相关的方法
       */
      currentVaule(index) {
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
         this.$refs.tabControl1.currentIndex = index
         this.$refs.tabControl2.currentIndex = index
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
         this.isFixed = (-position.y) > this.tabOffsetTop
      },
      /**
       * 监听上拉加载更多
       */
      loadMore() {
         // console.log('上拉加载');
         this.getHomeGoods(this.currentType)
         this.$refs.scroll.finishPullUp()
      },
      homeSwiperImageLoad() {
         //获取tabControl的offsetTop
         //$el是用于获取组件中的元素
         // console.log(this.$refs.tabControl.$el.offsetTop);
         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
   .fixed{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
   }
   .tabCon{
      position: relative;
      z-index: 9;
      background: #fff;
   }
   .content{
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
   }
</style>
