import Vue from 'vue'
import Vuex, { Store } from 'vuex'

//安装插件
Vue.use(Vuex)

//创建store对象
const store = new Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            //payload为新添加的商品 
            let oldProduct = null
            for (let item of state.cartList) {
                if(item.iid === payload.iid) {
                    oldProduct = item
                }
            }
            if(oldProduct) {
                oldProduct += 1
            }else {
                payload = 1
            }
            state.cartList.push(payload)
        }
    }
})

//挂载vue实例中
export default store