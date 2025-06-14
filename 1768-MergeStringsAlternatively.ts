//1768. Merge Strings Alternately
function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    const choosenLen = Math.max(word1.length, word2.length);
    for (let i = 0; i < choosenLen; i++) {
        if (word1[i])
            result += word1[i]
        if (word2[i])
            result += word2[i]
    }
    return result;
};
