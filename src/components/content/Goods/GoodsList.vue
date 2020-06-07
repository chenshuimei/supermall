<!--  -->
<template>
   <div class="goods">
       <goods-list-item v-for="item in goodsList" :goods-item="item"/>
   </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name: "GoodsList",
    props: {
        goodsList:{
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    },
    data () {
        return {
        }
    }
}
</script>

<style  scoped>
    .goods{
        flex-wrap: wrap;
        display: flex;
        justify-content:space-evenly;
        /* padding: 4px; */
    }
</style>
