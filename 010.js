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
function sumPrimesBelow(number) {
    var primes = [];
    var next_prime = 2;
    while (next_prime < number) {
        primes.push(next_prime);
        next_prime = nextPrime(next_prime);
    }
    return primes.reduce(function(s, n){ return s + n; }, 0);
}
console.log('Result: %s', sumPrimesBelow(2000000));