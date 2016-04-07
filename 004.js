function sortNumbers(a, b) {
    return a - b;
}
function isPalindrome(n) {
    var s = n.toString();
    var len = s.length / 2;
    for (var i = 0; i <= len; i++) {
        if (s[i] !== s[s.length -i -1])
            return false;
    }
    return true;
}
function largestPalindrome() {
    var product;
    var palindromes = [];
    for (var i = 100; i < 1000; i++) {
        for (var j = 100; j < 1000; j++) {
            product = i * j;
            if (isPalindrome(product))
                palindromes.push(product);
        }
    }
    palindromes = palindromes.sort(sortNumbers);
    return palindromes.pop();
}
console.log('Result: %s', largestPalindrome());