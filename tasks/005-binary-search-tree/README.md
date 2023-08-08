# 005 - Binary search tree

Tags: DataStructure

## Problem

Implement a class called **`BinarySearchTree`** that represents a binary search tree. The class should have the following methods:

### Methods

1. **`insert(data)`**: This method inserts a new node with the given data into the BST while maintaining the binary search tree property. It compares the data with the existing nodes and recursively traverses the tree to find the appropriate position for insertion.
2. **`contains(data)`**: This method checks whether a node with the given data exists in the BST. It compares the data with the current node and recursively traverses the tree by moving left or right based on the comparison until it finds a match or reaches a null node.
3. **`remove(data)`**: This method removes the node with the given data from the BST while maintaining the binary search tree property. It handles three cases:
    - If the node to be removed has no children, it is simply deleted.
    - If the node has one child, that child replaces the node.
    - If the node has two children, it is replaced with the smallest node from its right subtree (or the largest node from its left subtree), and then that node is removed from its original location.
4. **`getMin()`**: This method returns the minimum value (leftmost node) in the BST by traversing to the leftmost child recursively until reaching the leftmost leaf node.
5. **`getMax()`**: This method returns the maximum value (rightmost node) in the BST by traversing to the rightmost child recursively until reaching the rightmost leaf node.
6. **`traverseInOrder()`**: This method performs an in-order traversal of the BST, which visits nodes in ascending order. It recursively traverses the left subtree, visits the current node, and then recursively traverses the right subtree.

## Example of using:

```jsx
// Create a new instance of BinarySearchTree
const bst = new BinarySearchTree();

// Insert nodes into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(20);

// Check if a value exists in the BST
console.log(bst.contains(8)); // Output: true
console.log(bst.contains(25)); // Output: false

// Remove a node from the BST
bst.remove(3);
console.log(bst.contains(3)); // Output: false

// Get the minimum and maximum values in the BST
console.log(bst.getMin()); // Output: 5
console.log(bst.getMax()); // Output: 20

// Perform in-order traversal of the BST
bst.traverseInOrder(); // Output: 5 8 10 12 15 20
```

## Solution

### Problems
Самый сложный момент в коде это удаление элемента из дерева. Есть три случая: когда у удаляемого узла нет дочерних узлов, когда есть один узел, когда есть оба узла.

Когда есть оба узла нужно найти наименьший узел в правом поддереве и поставить его на место удаляемого элемента.

### Code

[https://github.com/newyorrker/code-task-solving-journal/blob/main/tasks/005-binary-search-tree/binary-search-tree.ts](https://github.com/newyorrker/code-task-solving-journal/blob/main/tasks/005-binary-search-tree/binary-search-tree.ts)
