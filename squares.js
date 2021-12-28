const sortedSquares = (array) => {
    let result = [] 
    let start = 0
    let end = array.length - 1
    let position = end

    while (start <= end) { 
        if (array[start] ** 2 > array[end] ** 2) {
            result[position--] = array[start++] ** 2 
        } else {
            result[position--] = array[end--] ** 2 
        }
    }
    
    return result
}

console.log(sortedSquares([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquares([-2, -1]))
console.log(sortedSquares([-10, -5, 0, 5, 10]))