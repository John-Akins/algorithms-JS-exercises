/**
 * Find missing number 
 * where numbers can be ordered in ascending order, in order of n = n + 1
 *      sort number in ascending order. O Log n
 *      loop through numbers to find missing number
 */

/**
 * Merge two arrays into one
 *  ordering items in ascending order
 */
 function merge(leftArr, rightArr) {

    const sortedArr = [];

    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

/**
 * Sort array with mergeSort algorithm
 */
function mergeSort(arr) {

    const half = arr.length / 2;

    if (arr.length <= 1) {
        return arr;
    }

    const leftArr = arr.splice(0, half);
    const rightArr = arr;

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

/**
 * Get sorted number
 */
function sortNumberArr(number) {

    const num_string = `${number}`;
    const num_arr = num_string.split(',');
    const sortedNumberArr = mergeSort(num_arr);

    return sortedNumberArr;
}

/**
 * Find missing number
 *  * Loop through numbers
 *      - track previous number
 *      - compare previous and current number
 *      - current number equals previous + 1 ?
 *          next
 *          ;
 *          missing number equals previous + 1
 */
function findMissingNumber(arr) {

    let missing_number = 0;
    let prev_number = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr_number = Number(arr[i]);

        if (curr_number + 0 !== prev_number + 1) {
            missing_number = prev_number + 1;
        }

        prev_number = curr_number;
    }

    if (arr.length === 1 && arr[0] === `1`) {
        missing_number = 2;
    } 

    if (missing_number === 0) {
        missing_number = Number(arr[arr.length - 1]) + 1;
    }

    return missing_number;
}

/**
 * 
 * 
 * Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
 * Create a variable sum to store the sum of array elements.
 * Traverse the array from start to end.
 * Update the value of sum as sum = sum + array[i]
 * Print the missing number as sumtotal – sum
 * 
 * @param {*} A 
 * @returns 
 */

function solution(A) {

    const sortedNumberArr = sortNumberArr(A)
    const missing_number = findMissingNumber(sortedNumberArr);
    
    return missing_number;
}
