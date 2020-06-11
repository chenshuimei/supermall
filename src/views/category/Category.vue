<!--  -->
<template>
   <div class="wrapper">
      <ul class="content">
            <li>列表*1</li>
            <li>列表*2</li>
            <li>列表*3</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*100</li>
            <li>列表*99</li>
            <li>列表*100</li>
      </ul>
   </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
   name: "category",
   data () {
      return {
         scroll:null
      }
   },
   mounted() {
      let wrapper = document.querySelector('.wrapper')
      let scroll = new Bscroll(wrapper)
      this.scroll = scroll
      console.log(scroll);
      
   }
}
</script>

<style  scoped>
   .wrapper{
      height: 100px;
      background-color: red;
   }
</style>
