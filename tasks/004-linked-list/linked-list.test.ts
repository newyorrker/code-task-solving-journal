import { LinkedList } from "./linked-list";

describe('LinkedList', () => {
  let linkedList: any;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('insertAtHead should insert nodes at the head of the linked list', () => {
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(15);

    expect(linkedList.head.value).toBe(15);
    expect(linkedList.head.next.value).toBe(10);
    expect(linkedList.head.next.next.value).toBe(5);
  });

  test('insertAtTail should insert nodes at the tail of the linked list', () => {
    linkedList.insertAtTail(20).insertAtTail(25)

    let current = linkedList.head;
    while (current.next) {
      current = current.next;
    }

    expect(current.value).toBe(25);
    expect(current.next).toBeNull();
  });

  test('search should return true if node with given data exists in the linked list', () => {
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(15);

    expect(linkedList.search(10)).toBe(true);
    expect(linkedList.search(20)).toBe(false);
  });

  test('delete should remove the first occurrence of the node with given data from the linked list', () => {
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(15);

    linkedList.delete(10);
    expect(linkedList.search(10)).toBe(false);

    linkedList.delete(20);
    expect(linkedList.search(20)).toBe(false);
  });
});