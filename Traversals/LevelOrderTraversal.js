var levelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let index = 0;

    while (index < queue.length) {
        let size = queue.length - index;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue[index++];
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};
