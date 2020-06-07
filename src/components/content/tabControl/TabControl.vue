<!--  -->
<template>
   <div class="tabControl">
       <div v-for="(item, index) in titles" class="tab-control-item" 
            :class="{active: index === currentIndex}"
            @click="itemClick(index)">
           <span>{{item}}</span>
       </div>
   </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index;
            this.$emit('currentClick', index)
        }
    }
}
</script>

<style  scoped>
    .tabControl{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color: var(--color-tint)
    }
    .active span {
        border-bottom: 3px solid var(--color-tint);
        padding: 5px
    }
</style>
