// LeetCode 49 - Group Anagrams
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let ch of s) {
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join("#");
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s);
    }
    return Array.from(map.values());
};
