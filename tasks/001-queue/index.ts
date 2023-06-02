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
    return this._items.splice(0, 1)[0];
  }

  isEmpty() {
    return !!this._items.length;
  }
}