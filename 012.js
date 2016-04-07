function calcTriangularNumber(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++)
        sum += i;
    return sum;
}
function countFactors(n) {
    var count = 1;
    for (var i = 2; i <= n / 2; i++)
        if (n % i === 0)
            count++;
    return count;
}
function triangularDivisors(count) {
    var n;
    for (var i = 1; true; i++) {
        n = calcTriangularNumber(i);
        if (countFactors(n) > count)
            return n;
    }
}
console.log(triangularDivisors(500));