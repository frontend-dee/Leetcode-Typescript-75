//151. Reverse Words in a String
function reverseWords(s: string): string {
    return s.split(' ')
        .filter(char => char !== '')
        .reverse()
        .join(' ');
};
