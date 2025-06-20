//1493. Longest Subarray of 1's After Deleting One Element - Sliding Window
function longestSubarray(nums: number[]): number {
    let k = 1;
    let start = 0, end = 0;
    while (end < nums.length) {
        if (nums[end++] == 0) k--;
        if (k < 0 && nums[start++] == 0)  k++
    }
    return ((end - start) - 1);
};
