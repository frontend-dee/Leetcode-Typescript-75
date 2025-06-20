//1456. Maximum Number of Vowels in a Substring of Given Length
function maxVowels(s: string, k: number): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let max = 0;
    for (let i = 0; i < k; i++)
        if (vowels.includes(s[i])) count++

    max = count;
    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) count++;
        if (vowels.includes(s[i - k])) count--;
        if (k === count) return count;
        max = Math.max(max, count);
    }
    return max;
};
