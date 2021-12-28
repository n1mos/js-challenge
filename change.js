function minimumChange(coins) {
    coins.sort((a, b) => a - b)

    let current = 0

    for (const coin of coins) {
        if (coin > current + 1) {
            return current + 1
        }

        current += coin
    }

    return current + 1
}

console.log(minimumChange([5, 7, 1, 1, 2, 3, 22]))
console.log(minimumChange([1, 1, 1, 1, 1]))
console.log(minimumChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))