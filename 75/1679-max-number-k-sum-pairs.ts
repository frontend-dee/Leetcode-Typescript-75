//1679. Max Number of K-Sum Pairs
function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)
    let left = 0;
    let right = nums.length - 1;
    let count = 0
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (k === sum) {
            count++;
            left++;
            right--;
        } else if (sum < k) left++;
        else right--;
    }
    return count;
};
