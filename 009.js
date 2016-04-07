function calcSum(a, b) {
    return a + b + calc_C(a ,b);
}

function calc_C(a, b) {
    return Math.sqrt(a * a + b * b);
}

function tripletProduct(value) {
    for (var a = 1; calcSum(a, a +1) <= value; a++) {
        for (var b = a +1; calcSum(a, b) <= value; b++) {
            if (calcSum(a, b) === value) {
                return a * b * calc_C(a, b);
            }
        }
    }
    return null;
}

console.log('Result: %s', tripletProduct(1000));

