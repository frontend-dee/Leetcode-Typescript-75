//345. Reverse Vowels of a String

function reverseVowels(s: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strArr: string[] = s.split('');
    const availVowels: string[] = strArr.filter((char) => isVowel(char, vowels));
    strArr.forEach((char, i) => {
        if (isVowel(char, vowels)) strArr[i] = availVowels.pop()
    });
    return strArr.join('');
};

function isVowel(char: string, vowels: string[]): boolean {
    return vowels.includes(char);
}
