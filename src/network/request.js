import axios from 'axios'

// //方法1：
// export function request(config, success, failure) {
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     //发送真正的网络请求
//     instance(config)
//         .then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }

//方法2：
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         //发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
//     })
// }


//方法3：
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'YourURL',
        imeout: 5000
    })
    //2.axios的拦截器
    ////2.1请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    })
    ////2.2 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);  
        return res.data
    },err => {
        console.log(err);
        
    })
    //3.发送真正的请求
    return instance(config)
}
