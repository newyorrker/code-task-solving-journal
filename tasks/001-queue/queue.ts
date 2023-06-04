export class Queue {

  private _items: any[] = [];

  get items() {
    return this._items;
  }

  enqueue(item: any) {
    this._items.push(item);
    return this;
  }

  dequeue() {
    if(this.isEmpty()) {
      throw new Error("The queue shoudn't be empty")
    }
    return this._items.shift();
  }

  isEmpty() {
    return !this._items.length;
  }
}