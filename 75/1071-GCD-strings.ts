//1071. Greatest Common Divisor of Strings
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';
    const GDC = gcd(str1.length, str2.length)
    return str1.substring(0, GDC)
};

function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
};
