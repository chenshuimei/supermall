<!--  -->
<template>
    <div>
        <nav-tab-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="nav-detail">
                <div v-for="(item, index) in titles" class="item" 
                :class="{active: currentIndex === index}" @click="itemClick(index)">{{item}}</div>
            </div>
        </nav-tab-bar>
    </div>
</template>

<script>
import NavTabBar from 'components/common/navtabbar/NavTabBar'

export default {
    name: "DetailNav",
    components: {
        NavTabBar
    },
    data () {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('detailNav', index)
        },
        backClick() {
            this.$router.back()
        }
    }
}
</script>

<style  scoped>
    .nav-detail {
        display: flex;
        font-size: 12px
    }
    .item {
        flex: 1
    }
    .active {
        color: var(--color-high-text)
    }
    .back img{
        margin-top: 12px; 
    }
</style>
