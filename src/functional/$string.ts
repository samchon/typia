/**
 * @internal
 */
export function $string(str: string): string {
    if (str.length > 41) return JSON.stringify(str);

    const length = str.length;
    let result = "";
    let last = 0;
    let found = false;
    let surrogateFound = false;
    let point = 255;

    // eslint-disable-next-line
    for (let i = 0; i < length && point >= 32; i++) {
        point = str.charCodeAt(i);
        if (0xd800 <= point && point <= 0xdfff) {
            // The current character is a surrogate.
            surrogateFound = true;
            break;
        }
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + "\\";
            last = i;
            found = true;
        }
    }

    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 || surrogateFound === true
        ? JSON.stringify(str)
        : `"${result}"`;
}
