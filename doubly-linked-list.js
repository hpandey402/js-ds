class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return false;
    const tmp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
    }
    tmp.next = null;
    tmp.prev = null;
    this.length--;
    return tmp;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let tmp = this.head;
    for (let i = 1; i <= index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const node = this.get(index);
    const prev = node.prev;
    prev.next = newNode;
    newNode.next = node;
    newNode.prev = prev;
    node.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    if (node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.length--;
      return node;
    }
    return node;
  }
}

const dll = new DoublyLinkedList(0);
dll.push(1);
dll.push(2);
dll.push(3);
dll.set(0, 1);
dll.set(1, 2);
dll.set(2, 4);
dll.set(3, 5);
dll.set(4, 6);
