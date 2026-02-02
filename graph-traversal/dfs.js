// Recursive DFS
export function dfsRecursive(graph, startVertex, visited = new Set(), result = []) {
    visited.add(startVertex);
    result.push(startVertex);

    for (const neighbor of graph.getNeighbors(startVertex)) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited, result);
        }
    }

    return result;
}

// Iterative DFS
export function dfsIterative(graph, startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    const result = [];

    while (stack.length > 0) {
        const vertex = stack.pop();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            // Push neighbors in reverse for proper order
            const neighbors = graph.getNeighbors(vertex);
            for (let i = neighbors.length - 1; i >= 0; i--) {
                if (!visited.has(neighbors[i])) stack.push(neighbors[i]);
            }
        }
    }

    return result;
}
