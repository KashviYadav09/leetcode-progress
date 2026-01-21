function dfs(graph, start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result);
        }
    }

    return result;
}


