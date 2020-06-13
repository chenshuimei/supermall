<!--  -->
<template>
   <div>
       <swiper class="detail-swiper">
           <swiper-item v-for="item in images">
               <img :src="item" alt="">
           </swiper-item>
       </swiper>
   </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
    name: "DetailSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        images:{
            type: Array,
            default() {
                return []
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
    .detail-swiper {
        height: 200px;
        overflow: hidden;
    }
</style>
