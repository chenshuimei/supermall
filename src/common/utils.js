// export function formatDate(date, fmt) {
//   if (/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   let o = {
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds()
//   };
//   for (let k in o) {
//     if (new RegExp(`(${k})`).test(fmt)) {
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//     }
//   }
//   return fmt;
// };

// function padLeftZero (str) {
//   return ('00' + str).substr(str.length);
// };


//防抖动,目的是当所有产品图片加载完之后才执行refresh。这样就不会频繁执行refresh()函数，提高性能
export function debounce(func, delay) {
  let timer = null
    return function (...args) {
      if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
        func.apply(this, args)
        }, delay)
    }
}