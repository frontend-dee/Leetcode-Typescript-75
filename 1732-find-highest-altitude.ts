//1732. Find the Highest Altitude - Prefix Sum
function largestAltitude(gain: number[]): number {
    let highestAltitude = 0;
    let sum = 0
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i]
        highestAltitude = Math.max(highestAltitude, sum)
    }
    return highestAltitude;
};
