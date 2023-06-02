# 001. Queue class

Tags: DataStructure

## Problem

Реализуйте класс **`Queue`**, который имеет следующие методы:

- **`enqueue(item)`**: добавляет элемент в конец очереди.
- **`dequeue()`**: удаляет и возвращает элемент из начала очереди.
- **`isEmpty()`**: возвращает **`true`**, если очередь пуста, и **`false`** в противном случае.

## Solution

### Problems

1. Сразу же проблема как вынимать элемент из очереди. Не могу вспомнить как точно работают методы `slice`, `splice`

>💡 Хорошо подходит метод `splice` который позвляет удалить элемент из списка и возвращает удаленный элемент

>❗ Нужно запомнить что метод `splice` возвращает массив удаленных элементов


### Code

[File with implementation](https://github.com/newyorrker/code-task-solving-journal/blob/task/001-queue/tasks/001-queue/index.ts)

[Backlink to the notion](https://crystalline-coral-237.notion.site/001-Queue-class-590ad41802864f89a2f11fb09afdedd1)
