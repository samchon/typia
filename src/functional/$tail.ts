/**
 * @internal
 */
export function $tail(str: string): string {
    return str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
}
