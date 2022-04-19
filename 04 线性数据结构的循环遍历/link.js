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

/**
 * 循环遍历链表
 */
function travel(root) {
  let temp = root;
  while (true) {
    if (temp == null) {
      break;
    } else {
      console.log(temp.value);
    }
    temp = temp.next;
  }
}
travel(a);
