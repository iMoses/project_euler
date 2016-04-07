var prime_factors = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var largest_multiple = prime_factors.reduce(function(s, n){ return s * n; }, 1);
function smallestMultiple(max) {
    for (var i = 1; i < max; i++) {
        if (prime_factors.every(function(n){ return i % n === 0; }))
            return i;
    }
    return max;
}
console.log('Result: %s', smallestMultiple(largest_multiple));