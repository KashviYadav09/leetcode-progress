
var MyCircularQueue = function (k) {
    this.capacity = k;
    this.queue = new Array(k);
    this.front = 0;
    this.size = 0;
};

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;

    let rear = (this.front + this.size) % this.capacity;
    this.queue[rear] = value;
    this.size++;
    return true;
};

MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;

    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
};

MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;

    let rear = (this.front + this.size - 1) % this.capacity;
    return this.queue[rear];
};

MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
};
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.capacity;
};
