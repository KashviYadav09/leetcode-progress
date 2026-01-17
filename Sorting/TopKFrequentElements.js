var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

    let buckets = Array(nums.length + 1).fill().map(() => []);
    for (let [num, freq] of map) buckets[freq].push(num);

    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    return result;
};
