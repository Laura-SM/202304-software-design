class InnerNode<T> {
  readonly data: T;
  next: InnerNode<T> | null;
  previous: InnerNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList<T> {
  #size: number;
  #tail: InnerNode<T> | null;
  #head: InnerNode<T> | null;

  constructor() {
    this.#size = 0;
    this.#tail = null;
    this.#head = null;
  }

  get size() {
    return this.#size;
  }

  get tail() {
    return this.#tail?.data ?? null;
  }

  get head() {
    return this.#head?.data ?? null;
  }

  insertAtEnd(value: T) {
    const newNode = new InnerNode(value);
    if (this.#head === null) {
      this.#head = newNode;
    }

    if (this.#tail !== null) {
      this.#tail.next = newNode;
      newNode.previous = this.#tail;
    }

    this.#tail = newNode;
    this.#size++;
  }

  insertAtBeginning(value: T) {
    const newNode = new InnerNode(value);
    if (this.#tail === null) {
      this.#tail = newNode;
    }

    if (this.#head === null) {
      this.#head = newNode;
    }

    const oldHead = this.#head;
    oldHead.previous = newNode;
    this.#head = newNode;
    this.#head.next = oldHead;

    this.#size++;
  }

  delete(): T | null {
    if (this.#head === null) {
      return null;
    }

    const oldHead = this.#head;
    this.#head = oldHead.next;
    this.#size--;
    return oldHead.data;
  }

  print() {
    if (this.#head === null) {
      console.log('The linked list is empty');
      return;
    }

    let currentNode: InnerNode<T> | null = this.#head;
    let index = 1;
    while (currentNode !== null) {
      console.log(`Nodo ${index}: ${currentNode?.data}`);
      currentNode = currentNode.next;
      index++;
    }
  }

  reversePrint() {
    if (this.#tail === null) {
      console.log('The linked list is empty');
      return;
    }

    let currentNode: InnerNode<T> | null = this.#tail;
    let index = this.#size;
    while (currentNode !== null) {
      console.log(`Nodo ${index}: ${currentNode?.data}`);
      currentNode = currentNode.previous;
      index--;
    }
  }
}
