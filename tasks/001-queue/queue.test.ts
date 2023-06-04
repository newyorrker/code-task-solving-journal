import {Queue} from "./queue";

describe("Queue class", () => {

  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueue should add an item to the queue", () => {
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test('check is queue empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("dequeue should remove and return the first item from the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    const item = queue.dequeue();
    expect(item).toBe(10);
  });

  test("dequeue should throw an error if the queue is empty", () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });

  test("isEmpty should return true if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });
});