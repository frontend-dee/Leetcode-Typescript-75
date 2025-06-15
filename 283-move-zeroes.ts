//283. Move Zeroes
function moveZeroes(nums: number[]): void {
    for (let right = 0, left = 0; right < nums.length; right++) {
        if (nums[right] != 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }
};
