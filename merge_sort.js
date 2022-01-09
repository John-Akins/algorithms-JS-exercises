/**
 *      Merge sort visualization
 *      
 *      1. split array to individual elements             
 * 
 *                  [7, 5, 2, 4, 3, 6, 1]
 *                [7, 5, 2]  |   [4, 3, 6, 1]
 *              [7] [5, 2]   |      [4, 3] [6, 1]
 *             [7] [5] [2]   |      [4] [3] [6] [1]
 * 
 *      2. sort array
 * 
 *          merge in pairs and sort
 * 
 *             [7] [5] [2]   |      [4] [3] [6] [1]
 *              
 *          [5, 7] [2]       |      [3, 4]  [1, 6]
 *      
 *         [2, 5, 7]         |      [1, 3, 4, 6]
 * 
 *                  [1, 2, 3, 4, 5, 6, 7]
 * 
 */

/**
 * sort arrays in ascending other
 *  - create sorted array to track sorted arrays 
 *  - loop through arrays
 *      - for each iteration
 *          - compare first item in each array
 *              - insert smallest item into sorted array
 * 
 *  - return sorted array
 * 
 * @param {Array} leftArr 
 * @param {Array} rightArr 
 * @returns 
 */
function sort(leftArr, rightArr) {
    let sortedArr = [];
    
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

/**
 * Sort an array with merge sort algorithm
 * 
 * 
 *  - Recursively split array into halves
 *      - until it can no longer be halved
 * 
 *  - sort left and right halves of the array
 * 
 * @param {Array} arr 
 * @returns {Array} : sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const mid_index = Math.floor(arr.length / 2);    
    const leftArr = arr.splice(0, mid_index);
    const rightArr = arr;

    return sort(mergeSort(leftArr), mergeSort(rightArr));            
}

console.log("sorting stuff", mergeSort(['C', 'D', 'B', 'A']))


