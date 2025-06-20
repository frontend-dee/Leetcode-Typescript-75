//724. Find Pivot Index - Prefix Sum
function pivotIndex(nums: number[]): number {
    let sumL = new Array(nums.length); let sumR = new Array(nums.length);
    const sum = nums.reduce((acc: any, curr: any) => acc + curr);
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            sumL[i] = 0;
            sumR[i] = sum - nums[i];
        } else {
            sumL[i] = sumL[i - 1] + nums[i - 1];
            sumR[i] = sumR[i - 1] - nums[i];
        }
        if (sumR[i] === sumL[i]) return i;
    }
    return -1;
};
