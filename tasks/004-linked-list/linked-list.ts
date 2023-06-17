class Node {
  next: Node | null = null;

  constructor(
    public value: any
  ) {
  }
}

export class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;

  private initList(data: any) {
    const firstValue = new Node(data);
    this.head = firstValue;
    this.tail = firstValue;
  }

  insertAtHead(data: any) {
    if(!this.head) {
      this.initList(data);
      return this;
    }

    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  insertAtTail(data: any) {
    if(!this.head || !this.tail) {
      this.initList(data);
      return this;
    }

    const newItem = new Node(data);

    this.tail.next = newItem;
    this.tail = newItem;

    return this;
  }

  delete(data: any) {
    if(!this.head) {
      return null;
    }

    if(this.head.value === data) {
      this.head = this.head?.next;
      return;
    }

    let current = this.head;

    while(current.next) {
      if(current.next.value === data) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  search(data: any) {
    if(!this.head) {
      return false;
    }

    let current = this.head;

    while(current.next) {
      if(current?.value === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}