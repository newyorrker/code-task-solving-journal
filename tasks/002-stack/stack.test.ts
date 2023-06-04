import { Stack } from "./stack";

describe("Test stack class", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("push should add element to top of the stack", () => {
    stack.push(10);

    expect(stack.isEmpty()).toBe(false);
  });

  test("pop should remove and return item from the top of the stack", () => {
    stack.push(10);
    stack.push(11);
    const item = stack.pop();
    expect(item).toBe(11);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test("pop should throw an error if the stack is empty", () => {
    expect(() => stack.pop()).toThrow(Error);
  });

  test("isEmpty should return true stack is empty and false otherwise.", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(50);
    expect(stack.isEmpty()).toBe(false)
  });
})