function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}
function findPrime(index) {
    var primes = [2];
    while (primes.length < index)
        primes.push(nextPrime(primes[primes.length -1]));
    return primes.pop();
}
console.log('Result: %s', findPrime(10001));