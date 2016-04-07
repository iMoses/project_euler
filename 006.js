function range(n) {
    return Array.apply(null, Array(n)).map(function (_, i) {return i +1;});
}
var numbers = range(100);
var square_sum = numbers.reduce(function(s, n){ return s + Math.pow(n, 2); }, 0);
var sum_square = Math.pow(numbers.reduce(function(s, n){ return s + n; }, 0), 2);
console.log('Result: %s', sum_square - square_sum);