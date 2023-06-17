export class Deque {

    items: (Record<string, any> | string | number | null)[] = [];

    /**
     * Adds an item to the front of the deque.
     * @param item
     */
    addFront(item: any) {
        this.items.unshift(item);
    }

    /**
     * Adds an item to the rear of the deque.
     */
    addRear(item: any) {
        this.items.push(item);
    }

    /**
     * Removes and returns an item from the front of the deque.
     */
    removeFront() {
        if(this.isEmpty()) {
            throw new Error("deque is empty");
        }

        return this.items.shift();
    }

    /**
     * Removes and returns an item from the rear of the deque.
     */
    removeRear() {
        if(this.isEmpty()) {
            throw new Error("deque is empty");
        }

        return this.items.pop();
    }

    /**
     * Returns true if the deque is empty, and false otherwise.
     */
    isEmpty() {
        return this.items.length <= 0;
    }
}