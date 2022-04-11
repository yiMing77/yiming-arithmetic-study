/*
 * @Author: your name
 * @Date: 2021-12-06 13:00:59
 * @LastEditTime: 2021-12-06 21:24:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yiming-arithmetic-study\选择排序\index.js
 * 
 */


let arr = [4, 1, 6, 9, 3, 2, 8, 7]

//比较 交换 排序


function compare(a, b) {
    if (a > b) return true;
    else return false;
}

function exchange(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function sort(arr) {
    //控制选择以及选择数组的长度
    for (let j = 0; j < arr.length; j++) {
        //做选择
        let maxIndex = 0;
        for (let z = 0; z < arr.length - 1 - j; z++) {
            if (compare(arr[maxIndex], arr[z])) {
                maxIndex = z;
            }

        }
        exchange(arr, maxIndex, arr.length - 1 - j);

    }
    return arr
}
console.log(sort(arr))

//任何一种排序算法没有优劣之分,只有是否适合
//越混乱适合快速排序
//越有序适合冒泡排序