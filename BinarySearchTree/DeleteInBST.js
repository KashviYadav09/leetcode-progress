var deleteNode = function(root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Case 1: No child
        if (!root.left && !root.right) return null;

        // Case 2: One child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 3: Two children
        let successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
};

function findMin(node) {
    while (node.left) node = node.left;
    return node;
}
