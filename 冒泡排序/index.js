/*
 * @Author: your name
 * @Date: 2021-12-06 13:47:20
 * @LastEditTime: 2021-12-06 21:20:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \算法\yiming-arithmetic-study\冒泡排序\index.js
 */
function merge(a, b) {

    let arr = a.concat(b)
    //冒泡的长短以及冒泡的过程
    for (let i = 0; i < arr.length - 1; i++) {
        //冒泡的过程
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}


console.log(merge([1, 3, 5], [2, 3, 7]))