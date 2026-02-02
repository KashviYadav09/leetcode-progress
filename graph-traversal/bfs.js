export function bfs(graph, startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);

        for (const neighbor of graph.getNeighbors(vertex)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}
