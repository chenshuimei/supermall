<!--  -->
<template>
   <div>
       <detail-nav/>
        <detail-swiper :images="topImage"/>
   </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import DetailSwiper from "./childComps/DetailSwiper"

import { getDetailData } from "network/detail"

export default {
    name: "Detail",
    components: {
        DetailNav,
        DetailSwiper

    },
    data () {
        return {
            iid: null,
            topImage: []
        }
    },
    created() {
        this.iid = this.$route.params.iid

        getDetailData(this.iid).then(res => {
            this.topImage = res.result.itemInfo.topImages
            console.log(res);
            
        })
    }
}
</script>

<style  scoped>

</style>
