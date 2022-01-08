/**
 * permutation
 * @param {*} n
 * @returns 
 */
// function f(n) {
//     if (n === 0) {
//         console.log("*******************")
//         return;
//     } 

//     for (let i = 0; i < n; i++) {
//         console.log(i, n)
//         f(n - 1);
//     }
// }

// f(3);

/**
 * fibonacci
 * 
 * @param {*} n 
 */
// function fib(n) {
//     console.log({n});
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }    
//     console.log({_check: n});    
//     return fib(n - 1) + fib(n - 2)
// }

// console.log("fib >>>> ",fib(10));

/**
 * count down
 * 
 * @param {*} n 
 */
// function countDown(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     return countDown(n - 1);
// }

// console.log("count down >>>> ", countDown(10));

/**
 * merge sort
 * 
 * @param {Array} arr 
 */

function mergeSort(arr) {
    console.log({ arr });
    if (arr.length < 2) {
        return arr;
    }

    const mid_index = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid_index);
    const rightArr = arr.slice(mid_index, arr.length);

    return sort(mergeSort(leftArr), mergeSort(rightArr)); 
} 
// O(n log n);

function sort(leftArr, rightArr) {
    const resultArr = [];
    let left_index = 0;
    let right_index = 0;

    while (left_index < leftArr.length && right_index < rightArr.length) {
        if (leftArr[left_index] < rightArr[right_index]) {
            resultArr.push(leftArr[left_index]);
            left_index++;
        } else {
            resultArr.push(rightArr[right_index]);
            right_index++;
        }
        console.log({ resultArr })
    }
    return resultArr.concat((leftArr.slice(left_index))).concat((rightArr.slice(right_index)))
} // O(n)

const arr = [ 1, 3, 4, 556, 563, 65436, 2342, 1000000, 120, 1, 3, 4, 556, 563, 65436, 2342, 1000000, 120 ]


/**
    :::::::: MERGE SORT VISUALIZATION :::::::::

    array = [1,4,2,3]

    mergeSort(array)
                    [2, 1, 4, 3]
                    /           \
                [2, 1]          [4, 3]
                /   \            /   \
              [2]   [1]        [4]   [3]

    
    sort(arr1, arr2)  sorts bottom up

                    [ 1, 2, 3, 4]
                    /           \
                [1, 2]          [3, 4]
                /   \            /   \
              [2]   [1]         [4]  [3]

*/

