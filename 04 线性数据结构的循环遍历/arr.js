/**
 * 遍历数组
 */
let a = [1, 2, 3, 4, 5];
function travel(array) {
  if (array === null) return; //很重要
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}
travel(a);
