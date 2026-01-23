var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let lastVisited = null;
    let curr = root;

    while (curr || stack.length) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            let peek = stack[stack.length - 1];
            if (peek.right && lastVisited !== peek.right) {
                curr = peek.right;
            } else {
                result.push(peek.val);
                lastVisited = stack.pop();
            }
        }
    }
    return result;
};
