import { BinarySearchTree } from "./binary-search-tree";

describe('binary-search-tree', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it("test", () => {
    tree.insert(1);
    tree.insert(4);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);

    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(4)).toBe(true);
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(9)).toBe(true);
    expect(tree.contains(8)).toBe(true);
    expect(tree.contains(2)).toBe(false);
    expect(tree.contains(12)).toBe(false);
  })
})