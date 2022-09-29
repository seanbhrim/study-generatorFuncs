function binaryTreeNode(value) {
  let node = { value };
  node[Symbol.iterator] = function* depthFirst () {
    yield node.value;
    if (node.leftChild) yield* node.leftChild;
    if (node.rightChild) yield* node.rightChild;
  };
  return node;
}

