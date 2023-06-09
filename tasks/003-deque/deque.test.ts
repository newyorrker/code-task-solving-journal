import { Deque } from "./deque";

describe("Test stack class", () => {
  let deque: Deque;

  beforeEach(() => {
    deque = new Deque();
  });

  test("add and remove front", () => {
    deque.addFront(10);
    deque.addFront(20);

    expect(deque.isEmpty()).toBe(false);
    expect(deque.removeFront()).toBe(20);
  });

  test("add and remove rear", () => {

    deque.addRear(10);
    deque.addRear(20);

    expect(deque.isEmpty()).toBe(false);
    expect(deque.removeRear()).toBe(20);
  });

  test("removeFront should throw an error if deque is empty", () => {
    deque.addFront(10);
    deque.addFront(20);

    deque.removeFront();
    deque.removeFront();
    expect(() => deque.removeFront()).toThrow(Error);
  });

  test("removeRear should throw an error if deque is empty", () => {
    deque.addRear(10);
    deque.addRear(20);

    deque.removeRear();
    deque.removeRear();
    expect(() => deque.removeRear()).toThrow(Error);
  });

  test("removeFront and removeRear together", () => {
    deque.addFront(10);
    deque.addFront(20);
    deque.addFront(30);

    expect(deque.removeRear()).toBe(10);
    expect(deque.removeFront()).toBe(30);
  });

  test("isEmpty return empty deque or not", () => {
    expect(deque.isEmpty()).toBe(true);
    deque.addFront(20);
    expect(deque.isEmpty()).toBe(false);
    deque.removeRear();
    expect(deque.isEmpty()).toBe(true);
  });
})