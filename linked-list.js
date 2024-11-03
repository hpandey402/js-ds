class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.tail = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  shift() {
    const next = this.head.next;
    if (next) {
      this.head = null;
      this.head = next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return this;
  }
  pop(value) {
    if (this.length === 0) return undefined;
    let tmp = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    if (this.length >= 2) {
      let pre;
      while (tmp.next) {
        pre = tmp;
        tmp = tmp.next;
      }
      pre.next = null;
      this.tail = pre;
    }
    this.length--;
    return tmp;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let val = this.head;
    for (let i = 1; i <= index; i++) {
      val = val.next;
    }
    return val;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let pre = this.head;
    let temp = this.head;
    for (let i = 1; i <= index; i++) {
      pre = temp;
      temp = pre.next;
    }
    pre.next = newNode;
    newNode.next = temp;
    pre = null;
    temp = null;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const deleteNode = prev.next;
    prev.next = deleteNode.next;
    this.length--;
    return deleteNode;
  }

  reverse() {
    //hardest part
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = this.tail.next;
    let pre = this.tail;

    this.tail.next = null;
    for (let i = 0; i < this.length - 1; i++) {
      let tmp = next.next;
      next.next = pre;
      pre = next;
      next = tmp;
    }
    return this;
  }
}

const ll = new LinkedList(4);
console.log(ll);
ll.push(7);
ll.push(8);
ll.push(9);
ll.unshift(3);
