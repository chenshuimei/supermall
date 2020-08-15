<!--  -->
<template>
   <div class="recommend-info">
       <div class="info-header">热门推荐</div>
       <div class="recommend-item">
            <goods-list-info :goods-list="detailsRecommend"></goods-list-info>
       </div>
   </div>
</template>

<script>
import GoodsListInfo from 'components/content/Goods/GoodsList'

export default {
    name: "DetailRecommend",
    components: {
        GoodsListInfo
    },
    props: {
        detailsRecommend: {
            type: Array
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style  scoped>
  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
