var merge = function (intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let current = intervals[0];
    merged.push(current);

    // Step 2: Merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];

        if (current[1] >= next[0]) {
            // Overlapping → merge
            current[1] = Math.max(current[1], next[1]);
        } else {
            current = next;
            merged.push(current);
        }
    }

    return merged;
};
