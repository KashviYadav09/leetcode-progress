const MinHeap = require("./MinHeap");

var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap();

    for (let num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(val) {
    this.heap.push(val);
    if (this.heap.size() > this.k) {
        this.heap.pop();
    }
    return this.heap.peek();
};
