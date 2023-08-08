interface NodeInterface {
  left?: Node;
  right?: Node;
  value: number;
}

type NodeSide = "left" | "right";

class Node implements NodeInterface {
  left?: Node;
  right?: Node;

  constructor(public value: number) {}

  set(value: number, side: NodeSide) {
    this[side] = new Node(value);
  }

  setLeft(value: number) {
    this.left = new Node(value);
  }

  setRight(value: number) {
    this.right = new Node(value);
  }
}

export class BinarySearchTree {
  tree: { root?: Node } = {};

  contains(value: number) {
    if(!this.tree.root) {
      return false;
    }

    return !!this.search(this.tree.root, value);
  }

  insert(value: number) {
    if(!this.tree.root) {
      this.tree.root = new Node(value);
    }
    else {
      this.createNode(this.tree.root, value);
    }
  }

  remove(value: number) {

    //получаем родителя ноды которой ищем
    //получаем ноду которую нам надо удалить
    //проверяем есть ли дочерние ноды
      //нет дочерних нод
        //удаляем ноду +
      //есть одна дочерняя нода
        //записываем дочернюю ноду+
        //удаляем нужную ноду+
        //замещаем+
      //есть 2 дочерние ноды
        //

    if(!this.tree?.root) {
      return false;
    }

    let parentNode = this.getParentOfNode(value);
    let side: "left" | "right" | "" = "";

    if(parentNode?.left?.value === value) {
      side = "left";
    }

    if(parentNode?.right?.value === value) {
      side = "right";
    }

    if(side && parentNode?.[side]) {

      let node = parentNode[side];

      if(!node?.left && !node?.right) {
        delete parentNode[side];
      }
      else if(node.left && !node.right) {
        delete parentNode[side];
        parentNode[side] = node.left
      }
      else if(!node.left && node.right) {
        delete parentNode[side];
        parentNode[side] = node.right;
      }
      else if(node.left && node.right) {
        const minValueNode = this.getMinValueNode(node.right);
        this.remove(minValueNode.value);
        const left = node.left;
        delete parentNode[side];
        const newNode = parentNode[side] = minValueNode;
        newNode.left = left;
        newNode.right = node.right;
      }
    }
  }

  traverseInOrder(node?: Node, log?: number[]) {

    const rootNode = this.tree.root;

    if(!rootNode) {
      return [];
    }

    if(!node) {
      node = rootNode;
    }

    if(!log) {
      log = [];
    }

    if(node.left) {
      this.traverseInOrder(node.left, log);
    }

    log.push(node.value);

    if(node.right) {
      this.traverseInOrder(node.right, log);
    }

    return log;
  }

  getMin() {
    if(!this.tree?.root) {
      return null;
    }

    let target: Node | undefined = this.tree.root

    while(target?.left) {
      target = target.left;
    }

    return target.value;
  }

  getMax() {
    if(!this.tree?.root) {
      return null;
    }

    let target: Node | undefined = this.tree.root;

    while(target?.right) {
      target = target.right;
    }

    return target.value;
  }

  private getParentOfNode(value: number, node?: Node): Node | null {
    if(!node) {
      node = this.tree?.root;

      if(!node) {
        return null;
      }
    }

    if(node.left?.value === value || node.right?.value === value) {
      return node;
    }

    if(!node.left || !node.right) {
      return null;
    }

    const side = value < node.value ? "left" : "right";

    return this.getParentOfNode(value, node[side]);
  }

  private getMinValueNode(node: Node) {
    let target = node;

    while (target.left) {
      target = target.left;
    }

    return target;
  }

  private createNode(node: Node, value: number) {
    if(value === node.value) {
      throw new Error("value already exists");
    }

    const side: NodeSide = value < node.value ? "left" : "right";
    const nextNode = node[side];

    if(nextNode) {
      this.createNode(nextNode, value);
    }
    else {
      node.set(value, side);
    }
  }

  private search(node: Node, value: number): Node | null {
    if(value === node.value) {
      return node;
    }

    const side: NodeSide = value < node.value ? "left" : "right";
    const nextNode = node[side];

    if(nextNode) {
      return this.search(nextNode, value);
    }

    return null;
  }
}