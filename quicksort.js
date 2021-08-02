function quicksort(array) {

    if (array.length <= 1) {
        // Returns [] or [x]
        return array
    }

    // Gets the latest index to use as a pivot
    const pivot = array[array.length - 1]
    
    // Arrays to store number comparisons, left array goes with lesser numbers and right array goes with greater numbers.
    const leftArray = []
    const rightArray = []

    for (let el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArray.push(el) : rightArray.push(el)
    }

    // Recursive call to sort splitted arrays
    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)]

}

const array = [2, 5, 9, 10, 2, 1, 3, 4, 5, 2, 1, 0, 12, 11]

let sortedArray = quicksort(array)
console.log(sortedArray)

// Remove duplicates
console.log([...new Set(sortedArray)])