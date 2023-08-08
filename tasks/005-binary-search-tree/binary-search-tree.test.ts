import { BinarySearchTree } from "./binary-search-tree";

describe('Binary Search Tree', () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('insert() should insert a new node into the BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    // Проверка корректности вставки узлов
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });

  test('contains() should return true if the data exists in the BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });

  test('remove() should handle the case when the node has no children', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    // Удаляем элемент без дочерних узлов
    bst.remove(5);

    expect(bst.contains(5)).toBe(false); // Проверяем, что элемент удален
    expect(bst.contains(10)).toBe(true); // Проверяем, что другие элементы остаются нетронутыми
    expect(bst.contains(15)).toBe(true);

    // Проверяем структуру дерева
    expect(bst.traverseInOrder()).toEqual([10, 15]);
  });

  test('remove() should handle the case when the node has only one child', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(12);

    // Удаляем элемент с одним дочерним узлом
    bst.remove(15);

    expect(bst.contains(15)).toBe(false); // Проверяем, что элемент удален
    expect(bst.contains(12)).toBe(true); // Проверяем, что дочерний узел правильно перемещен
    expect(bst.contains(10)).toBe(true);

    // Проверяем структуру дерева
    expect(bst.traverseInOrder()).toEqual([5, 10, 12]);
  });

  test('remove() should handle the case when the node has two children', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(12);
    bst.insert(17);

    console.log(bst.traverseInOrder());

    // Удаляем элемент с двумя дочерними узлами
    bst.remove(15);

    console.log(bst.traverseInOrder());

    expect(bst.contains(15)).toBe(false); // Проверяем, что элемент удален
    expect(bst.contains(12)).toBe(true); // Проверяем, что правильный узел заменил удаленный
    expect(bst.contains(17)).toBe(true);
    expect(bst.contains(10)).toBe(true);



    // Проверяем структуру дерева
    expect(bst.traverseInOrder()).toEqual([5, 10, 12, 17]);
  });

  test('getMin() should return the minimum value in the BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.getMin()).toBe(5);
  });

  test('getMax() should return the maximum value in the BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.getMax()).toBe(15);
  });

  test('traverseInOrder() should perform in-order traversal', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(18);

    const result: number[] = bst.traverseInOrder() || [];

    console.log(result);

    expect(result).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });
});
