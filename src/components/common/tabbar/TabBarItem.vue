
<template>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :style="activeColor"><slot name="item-text"></slot></div>
            
        </div>
</template>

<script>
export default {
    name: "TabBarItem",
    data () {
        return {
            //  isActive: true
        }
    },
    props: {
        path: String,
        colorStyle: {
            type: String,
            default: "red"
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeColor() {
            return this.isActive ? {color: this.colorStyle} : {}
            // path: String,
            // default: red
        }
    },
    methods: {
        itemClick(){
            // console.log('itemClick');
            this.$router.replace(this.path)
        }
    }
}
</script>

<style  scoped>
    .tab-bar-item {
        flex: 1;
        background-color:#5754542e;
        cursor: pointer;
    }  
    .tab-bar-item img {
        height: 24px;
        width: 24px;
    }
    .active {
        /* color: #71cce0; */
        color: red
    }

</style>
