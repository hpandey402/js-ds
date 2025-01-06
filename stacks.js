class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }

  push(value) {
    //unshift terminology
    const node = new Node(value);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
    this.length++;
    return this;
  }
  pop() {
    //shift terminology
    if (this.length === 0) return false;
    let tmp = this.top;
    this.top = this.top.next;
    tmp.next = null;

    this.length--;
    return tmp;
  }
}

const s = new Stack(3);
s.push(4);
s.push(5);
s.push(6);
