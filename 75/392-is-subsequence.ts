//392. Is Subsequence
function isSubsequence(s: string, t: string): boolean {
    let sIndex = 0;
    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (t[tIndex] === s[sIndex]) { sIndex++ }
        if (sIndex > s.length) { break; }
    }
    return sIndex === s.length
};
