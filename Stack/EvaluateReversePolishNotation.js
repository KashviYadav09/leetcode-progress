// LeetCode 150 - Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

var evalRPN = function (tokens) {
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        }
    }
    return stack.pop();
};
