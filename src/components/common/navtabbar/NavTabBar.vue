<!--  -->
<template>
   <div class="navtabbar">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
export default {
   name: 'NavTabBar',
   data () {
     return {
     }
   }
}
</script>

<style  scoped>
    .navtabbar{
        display: flex;
        height: 44px;
        text-align: center;
        line-height: 44px;
        box-shadow: 1px 1px 5px rgba(100, 100, 100, .1)
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>
