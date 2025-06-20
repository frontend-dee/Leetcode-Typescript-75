//2215. Find the Difference of Two Arrays
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [set1, set2] = [new Set(nums1), new Set(nums2)];
    return [
        [...set1].filter(num => !set2.delete(num)),
        [...set2]
    ]
};
