// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * Shift array right
 *  - get last element in array
 *  - set element at last index to first element
 *  - remove last index item
 * @param {Array} array
 * @returns {Array}
 */
 const shiftArrayRight = (array) => {
    if (array && array.length > 0) {
        const total_items = array.length;
        const last_index = total_items - 1;
        const last_item = array[last_index];
        array.pop();
        return [last_item, ...array];
    }
    return [];
}

function solution(A, K) {
    let arr = A || [];
    for (i = 0; i < K; i++) {
        const shiftedArr = shiftArrayRight(arr);
        arr = shiftedArr;
    }    
    return arr;
}
