//1431. Kids With the Greatest Number of Candies
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = [];
    const maxCandyGiven = Math.max(...candies)
    candies.forEach(candies => result.push(candies + extraCandies >= maxCandyGiven))
    return result;
};
