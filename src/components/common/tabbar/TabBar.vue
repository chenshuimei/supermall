<!--  -->
<template>
   <div id="tab-bar">
        <slot></slot>
   </div>
</template>

<script>
export default {
   name: "TabBar",
   data () {
     return {
     }
   }
}
</script>

<style  scoped>
    #tab-bar {
        display: flex;
        text-align: center;
        height: 49px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -3px 2px rgba(100, 100, 100, .2)
    }

</style>
