/**
 * Get number binary representation
 *  - number/quotient > 0 ?
 *      - divide number/quotient by 2
 *      - store remainder
 *      - store quotient
 */
 const getBinary = (number) => {
    let binary = '';
    let num = number;
    if (num === 1) {
       binary = '0'
    } else {
       while (num >= 1) {
          const quotient = Math.floor(num / 2);
          const remainder = num % 2;
          // keep quotient
          num = quotient;
          binary = `${remainder}${binary}`;
       }
    }
    return binary || null;
 }
 
 /**
 * Get maximum binary gap
 *  1. loop through binary string
 *      1. track gap track in progress
 *      2. track new gap
 *      3. track saved gap array
 *      4. current value equals 0 ?
 *          - set loop in progress
 *          - push 0 into new gap = true
 *          - current value not equal 0
 *          - save curr binary length in step 3 array
 *          - set loop in progress = false
 *  2. return max binary from tracked gap array
 * parameters
 * binary: Integer
 */
 const getMaxBinaryGap = (binary) => {
    if (binary.length > 0) {
       const gap_arr = binary.split('') || [];
       let track_in_progress = false;
       let new_gap = '';
       let prev_item = ''
       const binary_gap_lenghts_arr = [];
 
       for (i = 0; i < gap_arr.length; i++) {
          const curr_item = gap_arr[i];
          // track new gap
          if (prev_item !== '0' && curr_item === '0') {
             track_in_progress = true;
          }
          // handle end of gap track
          if (track_in_progress === true && curr_item !== '0') {
             const curr_gap_length = new_gap.length;
             binary_gap_lenghts_arr.push(curr_gap_length)
             new_gap = '';
             track_in_progress = false;
          }
 
          if (track_in_progress === true && curr_item === '0') {
             new_gap = `0${new_gap}`;
          }
          prev_item = curr_item;
       }
 
       if (binary_gap_lenghts_arr.length > 0) {
          const max_binary_gap = Math.max(...binary_gap_lenghts_arr)
          return max_binary_gap;
       }
    }
    return 0;
 }
 
 function solution(N) {
    const binary = getBinary(N);
    const max_binary_gap = getMaxBinaryGap(binary);
    return max_binary_gap;
 }
 