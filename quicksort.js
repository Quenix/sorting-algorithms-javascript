function quicksort(array) {
	
    if (array.length <= 1){
        return array
    }
    
    const pivot = array[array.length-1]
    const leftArray = []
    const rightArray = []
    
    for (let el of array.slice(0, array.length-1)) {
        el < pivot ? leftArray.push(el) : rightArray.push(el)
    }
    
    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)]
  
  }
  
  const array = [2,5,9,10,2,1,3,4,5,2,1,0,12,11]
  
  console.log(quicksort(array))