function Node(value) {
  this.value = value;
  this.next = null;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

// function travel(root) {
//   let temp = root;
//   while (true) {
//     if (temp == null) {
//       break;
//     } else {
//       console.log(temp.value);
//     }
//     temp = temp.next;
//   }
// }
function travel(root) {
  if (root == null) return;
  console.log(root.value, "递归方法");
  travel(root.next);
}
travel(a);
