/**
 * Get the item with an odd occurence
 *  1. sort array in ascending order
 *  2. track is_new_item
 *  3. track tracked_items_arr
 *  4. iterate through array
 *      - check if current item is new item
 *          - is new item and not last index ?
 *              - check old item arr lenght
 *                  - is greater than 0 and not even ?
 *                      - return old item arr
 *                  - is greater than 0 and even ?
 *                      - clear tracked item arr
 *                      - push to tracked item_arr
 *          - is new item and is last index ?
 *                  - return current item
 *          - not new ?
 *              -  add item to tracked items array
 */

 function solution(A) {
    if (A && A.length > 0) {
        A.sort();
        let is_new_item = false;
        let tracked_item_arr = [];
        const arr_length = A.length;

        for (i = 0; i < arr_length; i++) {
            const curr_item = A[i];
            const is_last_index = arr_length === i + 1;
            is_new_item = tracked_item_arr[0] !== curr_item;

            if (is_new_item && !is_last_index) {
                const is_odd_occurence = tracked_item_arr.length > 0 &&
                    tracked_item_arr.length % 2 > 0;
                if (is_odd_occurence) {
                    return tracked_item_arr[0];
                } else {
                    tracked_item_arr = [curr_item];
                }
            } else if (is_new_item && is_last_index) {
                return curr_item;
            } else {
                tracked_item_arr = [...tracked_item_arr, curr_item];
            }
        }
    }
    return null;
}