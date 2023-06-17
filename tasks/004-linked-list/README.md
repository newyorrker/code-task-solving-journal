# 004 - Linked list

Tags: DataStructure

## Problem

Implementing a Linked List
Implement a class called **`LinkedList`** that represents a singly linked list. The class should have the following methods:

- **`insertAtHead(data)`**: Inserts a new node with the given data at the head of the linked list.
- **`insertAtTail(data)`**: Inserts a new node with the given data at the tail of the linked list.
- **`delete(data)`**: Deletes the first occurrence of the node with the given data from the linked list.
- **`search(data)`**: Returns **`true`** if a node with the given data exists in the linked list, and `false

## Example of using:

```jsx
// Create a new instance of LinkedList
const linkedList = new LinkedList();

// Insert nodes at the head of the linked list
linkedList.insertAtHead(5);
linkedList.insertAtHead(10);
linkedList.insertAtHead(15);

// Insert nodes at the tail of the linked list
linkedList.insertAtTail(20);
linkedList.insertAtTail(25);

// Display the linked list
let current = linkedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

// Output:
// 15
// 10
// 5
// 20
// 25
```

## Solution

### Problems

1. Была проблема с придумыванием алгоритмов поиска и вставки в конец. Проблемы с использованием конструкции `while` Возможно надо найти еще задач где удобно использование `while`

> Изнчально добавил поле `tail` и хотел сделать вставку в конец без перебора всего списка. В найденом решении это делается перебором всего списка. Но в итоге все равно через tail

> Еще я не додумался при удалении элемента использовать прием
    `current.next = current.next.next;`
    Хороший прием для пропуска элемента. Тут так же изначально не использовал `while`


### Code

[https://github.com/newyorrker/code-task-solving-journal/blob/main/tasks/004-linked-list/linked-list.ts](https://github.com/newyorrker/code-task-solving-journal/blob/main/tasks/004-linked-list/linked-list.ts)