interface NodeInterface {
  left?: Node;
  right?: Node;
  value: number;
}

class Node implements NodeInterface {
  left?: Node;
  right?: Node;

  constructor(public value: number) {}

  setLeft(value: Node) {
    this.left = value;
  }

  setRight(value: Node) {
    this.right = value;
  }
}

export class BinarySearchTree {
  tree: { root?: Node } | null = null;

  contains(value: number) {
    if(!this.tree || !this.tree.root) {
      return false;
    }

    const searchedValue = this.search(this.tree.root, value);

    return searchedValue === value;
  }

  insert(value: number) {
    if(!this.tree || !this.tree.root) {
      this.tree = { root: new Node(value) }
    }
    else {
      this.createNode(this.tree.root, value);
    }
  }

  remove(value: number) {
    //нужно пере
  }

  private createNode(node: Node, value: number) {
    if(value === node.value) {
      throw new Error("value already exists")
    }

    if(value < node.value) {

      if(node.left) {
        this.createNode(node.left, value);
      }
      else {
        node.left = new Node(value);
      }
    }
    else {
      if(node.right) {
        this.createNode(node.right, value);
      }
      else {
        node.right = new Node(value);
      }
    }
  }

  private search(node: Node, value: number): number | null {
    if(value === node.value) {
      return node.value;
    }

    if(value < node.value && node.left) {
      return this.search(node.left, value);
    }
    else if(node.right) {
      return this.search(node.right, value);
    }

    return null;
  }
}