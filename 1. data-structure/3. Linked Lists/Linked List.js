class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length += 1;

    return this;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode; // this.tail still refer to the previous newNode
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  traversalToIndex(index) {
    let counter = 0;
    let indexNode = this.head;

    while (counter !== index) {
      indexNode = indexNode.next;
      counter += 1;
    }

    return indexNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index > this.length) {
      this.append(value);
      return;
    }

    let newNode = new Node(value);
    let nodeBeforeTarget = this.traversalToIndex(index - 1);

    newNode.next = nodeBeforeTarget.next;
    nodeBeforeTarget.next = newNode;
    this.length += 1;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let nodeBeforeTarget = this.traversalToIndex(index - 1);
    nodeBeforeTarget.next = nodeBeforeTarget.next.next;
    this.length -= 1;

    return this;
  }

  print() {
    const result = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  reverse() {
    // wait for implementation
  }
}

const linkedList = new LinkedList(2);
linkedList.append(6);
linkedList.append(8);

console.log("before remove: ", linkedList.print());
linkedList.remove(2);
console.log("after remove: ", linkedList.print());
