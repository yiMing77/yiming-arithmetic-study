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

function reverse(root) {
  if (root.next.next === null) {
    root.next.next = root;
    return root.next;
  } else {
    let result = reverse(root.next);
    root.next.next = root;
    root.next = null;
    return result;
  }
}

function travel(root) {
  if (root.next === null) return;
  console.log(root.value);
  travel(root.next);
}
travel(reverse(a));
