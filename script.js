function primeNumber(){
    let m = parseInt(prompt("Enter the first number:"));
    let n = parseInt(prompt("Enter the second number:"));

    while (isNaN(m) || isNaN(n) || m <= 1 || n <= 1) {
        alert("Both numbers should be integers greater than 1. Please try again.");
        m = parseInt(prompt("Enter the first number:"));
        n = parseInt(prompt("Enter the second number:"));
    }

    if (m > n) {
        [m, n] = [n, m];
    }

    console.log(`Prime numbers in the range ${m} to ${n}:`);
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            return false;
            }
        }
        return true;
    }
}

