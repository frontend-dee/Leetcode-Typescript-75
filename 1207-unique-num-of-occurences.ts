//1207. Unique Number of Occurrences
function uniqueOccurrences(arr: number[]): boolean {
    let hashMap: Map<number, number> = new Map();

    for (let i of arr) {
        if (hashMap.has(i))
            hashMap.set(i, hashMap.get(i) + 1)
        else
            hashMap.set(i, 1)
    }
    const unique = new Set(Array.from(hashMap.values()));
    return unique.size === hashMap.size;
};
