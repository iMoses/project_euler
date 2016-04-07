function isPrime(n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
        if (n % i == 0) return false;
    return true;
}
function largestPrimeFactor(value, start_from) {
    var result = start_from || 2;
    var q = Math.floor(Math.sqrt(value));
    for (var i = result +1; i < q; i += 2)
        if (value % i === 0 && isPrime(i))
            result = i;
    return result;
}
console.log('Result: %s', largestPrimeFactor(600851475143));