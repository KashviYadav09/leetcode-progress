function bfs(graph, start) {
    const visited = new Set();
    const queue = [];
    const result = [];

    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}


