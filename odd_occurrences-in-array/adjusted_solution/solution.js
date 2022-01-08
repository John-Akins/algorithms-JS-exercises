/**
 *  iterate through array
 *      - save occurence in map
 *  check odd value from saved occurence map
 * 
 *  * expected time complexity O(a+n)
 */

 function solution(A) {
    const arr_length = A.length;
    // track value repititions
    const valueRepsMap = {};

    for (i = 0; i < arr_length; i++) {
        const curr_iteration_value = A[i];
        const value_exists = valueRepsMap.hasOwnProperty(`${curr_iteration_value}`);
        const value_reps = valueRepsMap[`${curr_iteration_value}`];

        const old_reps = value_exists ? value_reps : 0;
        const new_reps = old_reps + 1;

        valueRepsMap[`${curr_iteration_value}`] = new_reps;
    }

    const odd_number = Object.keys(valueRepsMap).filter(key => valueRepsMap[key] % 2 === 1)[0]
    return Number(odd_number)
}
