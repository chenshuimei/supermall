<!--  -->
<template>
   <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
       <table v-for="(item,index) in paramInfo.sizes" :key="index" class="rule">
           <tr v-for="(tr,trIndex) in item" :key="trIndex">
               <td v-for="(td,tdIndex) in tr" :key="tdIndex">{{td}}</td>
           </tr>
       </table>
       <table class="infos">
           <tr v-for="(tr, trIndex) in paramInfo.infos" :key="trIndex">
               <td class="info-param-key">{{tr.key}}</td>
               <td class="info-param-value">{{tr.value}}</td>
           </tr>
       </table>
   </div>
</template>

<script>
export default {
    name: "DetailParamInfo",
    props: {
        paramInfo: {
            type: Object
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style  scoped>
    .param-info {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .param-info table{
        width: 100%;
        border-collapse: collapse;
        
    }
    .param-info table tr{
        height: 42px;
        border-bottom:1px solid #cfcdcd;
    }
    .info-param-key {
        /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
        width: 95px;
    }
    .info-param-value{
        color: var(--color-tint);
    }
</style>
