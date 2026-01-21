const PriorityQueue = require("./PriorityQueue");

function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();

    for (let node in graph) {
        distances[node] = Infinity;
    }

    distances[start] = 0;
    pq.push(start, 0);

    while (!pq.isEmpty()) {
        const [currentNode, currentDist] = pq.pop();

        if (currentDist > distances[currentNode]) continue;

        for (let [neighbor, weight] of graph[currentNode]) {
            const newDist = currentDist + weight;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.push(neighbor, newDist);
            }
        }
    }

    return distances;
}


