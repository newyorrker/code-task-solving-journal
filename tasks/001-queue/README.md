# 001. Queue class

Last edited time: June 2, 2023 8:33 PM
Owner: Руслан Си
Tags: DataStructure

## Problem

Реализуйте класс **`Queue`**, который имеет следующие методы:

- **`enqueue(item)`**: добавляет элемент в конец очереди.
- **`dequeue()`**: удаляет и возвращает элемент из начала очереди.
- **`isEmpty()`**: возвращает **`true`**, если очередь пуста, и **`false`** в противном случае.

## Solution

### Problems

1. Сразу же проблема как вынимать элемент из очереди. Не могу вспомнить как точно работают методы `slice`, `splice`

    <aside>
    💡 Хорошо подходит метод `splice` который позвляет удалить элемент из списка и возвращает удаленный элемент

    </aside>

    <aside>
    <img src="https://www.notion.so/icons/exclamation-mark-double_red.svg" alt="https://www.notion.so/icons/exclamation-mark-double_red.svg" width="40px" /> Нужно запомнить что метод `splice` возвращает массив удаленных элементов

    </aside>


### Code

[https://github.com/newyorrker/code-task-solving-journal/blob/task/001-queue/tasks/001-queue/index.ts](https://github.com/newyorrker/code-task-solving-journal/blob/task/001-queue/tasks/001-queue/index.ts)