//2966. Divide Array Into Arrays With Max Difference
function divideArray(nums: number[], k: number): number[][] {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] <= k)
            result.push([nums[i], nums[i + 1], nums[i + 2]]);
        else return []
    }
    return result;
};
