var cur;
var fibonacci = [1, 2];
for (var i = 1; true; i++) {
    cur = fibonacci[i] + fibonacci[i -1];
    if (cur > 4000000) break;
    fibonacci.push(cur);
}
var sum = fibonacci.reduce(function(sum, x) {
    return x % 2 ? sum : sum + x;
}, 0);
console.log('Result: %s', sum);