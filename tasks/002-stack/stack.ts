export class Stack {
  private _items: any[] = [];

  push(item: any) {
    this._items.push(item);
  }

  pop() {
    if(this.isEmpty()) {
      throw new Error("The stack shoudn't be empty");
    }
    return this._items.pop();
  }

  isEmpty() {
    return !this._items.length;
  }
}