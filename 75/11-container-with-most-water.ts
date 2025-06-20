//11. Container With Most Water
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let largestArea = 0;
    let w, h;
    while (left < right) {
        w = right - left;
        if (height[right] < height[left]) { h = height[right]; right--; }
        else { h = height[left]; left++; }
        const area = w * h;
        if (largestArea < area) largestArea = area
    }
    return largestArea;
};
