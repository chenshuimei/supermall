<!--  -->
<template>
   <div class="recommend">
       <div v-for="item in recommend" class="recommend-item">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
       </div>
   </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommend:{
            type:Array,
            default(){
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
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 20px 0;
        border-bottom: 10px solid #eeee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        height: 70px;
        width: 70px;
        margin-bottom:10px
        
    }
</style>
