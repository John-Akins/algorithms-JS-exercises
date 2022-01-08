// source: geek for geek

// Find the missing element in a missing permutation
// Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
// Create a variable sum to store the sum of array elements.
// Traverse the array from start to end.
// Update the value of sum as sum = sum + array[i]
// Return the missing number as sumtotal – sum

function solution(A) {
    const arr = Array.from(`${A}`.split(','), (n) => Number(n));
    const n = arr.length + 1;

    let sum = 0;
    const sum_total = (n) * (n + 1) / 2;

    for (var i = 0; i < n; i++) {
        const val = arr[i];
        if (val > 0) {
            sum = sum + val;
        }
    }

    const missing_number = sum_total - sum;

    return missing_number;
}
