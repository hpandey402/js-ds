class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    //push
    const node = new Node(value);
    if (this.last) {
      this.last.next = node;
      this.last = node;
    } else {
      this.last = node;
      this.first = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    //unshift
    if (this.length === 0) return false;
    let tmp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      tmp.next = null;
    }
    this.length--;
    return tmp;
  }
}

const q = new Queue(3);
