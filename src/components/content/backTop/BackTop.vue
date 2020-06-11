<!--  -->
<template>
   <div class="backtop">
       <img src="~assets/img/common/top.png" alt="">
   </div>
</template>

<script>
export default {
    name: "BackTop",
    data () {
        return {
        }
    }
    
}
</script>

<style  scoped>
    .backtop{
        position: fixed;
        right: 7px;
        bottom: 49px;
    }
    .backtop img{
        width: 50px;
        height: 50px;
    }
</style>
