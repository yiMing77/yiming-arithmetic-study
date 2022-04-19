let a = [1, 2, 3, 4, 5];
function travel(arr, i) {
  if (arr == null || i >= arr.length) return;
  console.log(arr[i]);
  travel(arr, i + 1);
}
travel(a, 0);
