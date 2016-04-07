function calcCombinations(n) {
    return factorial(n * 2) / Math.pow(factorial(n), 2);
}
function factorial(n) {
    var product = 1;
    for (var i = 1; i <= n; i++)
        product *= i;
    return product;
}
console.log('Result: %s', calcCombinations(20));