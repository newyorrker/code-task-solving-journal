import {Queue} from "./index";

describe("Queue class", () => {
  const queue = new Queue();
  const testValue1 = "test-value";
  const testValue2 = "test-value";

  test('add item to the queue', () => {
    queue.enqueue(testValue1);
    queue.enqueue(testValue1);

    expect(queue.items[0]).toBe(testValue1);
    expect(queue.items[1]).toBe(testValue2);
  });

  test('check is queue empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('remove items from the queue and check is empty after removing', () => {
    expect(queue.dequeue()).toBe(testValue1);
    expect(queue.dequeue()).toBe(testValue2);
    expect(queue.isEmpty()).toBe(false);
  });
});