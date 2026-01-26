var searchBST = function(root, val) {
    while (root) {
        if (root.val === val) return root;
        if (val < root.val) root = root.left;
        else root = root.right;
    }
    return null;
};
