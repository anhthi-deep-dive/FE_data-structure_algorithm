class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Using Linked List approach
 */

class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length -= 1;

    return this;
  }
}

const stack = new LinkedListStack();
stack.push("google");
stack.push("facebook");
stack.push("discord");
stack.pop();
console.log(stack);
