function collatzSequence(n) {
    for (var count = 1; n !== 1; count++)
        n = (n % 2) ? (3 * n + 1) : (n / 2);
    return count;
}

var count = 0;
var result = 0;
var result_count = 0;
for (var i = 1; i < 1000000; i++) {
    count = collatzSequence(i);
    if (count > result_count) {
        result_count = count;
        result = i;
    }
}

console.log('Result: %s', result);