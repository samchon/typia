export namespace PatternUtil {
    export function fix(str: string): string {
        const first: number = str.indexOf(STRING);
        const last: number = str.lastIndexOf(STRING);
        return [
            first === -1 || none("(")(str.slice(0, first)) ? "^" : "",
            str,
            last === -1 || none(")")(str.slice(last + STRING.length))
                ? "$"
                : "",
        ].join("");
    }

    export function escape(str: string): string {
        return str
            .replace(/[|\\/{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
    }

    export const NUMBER = "-?\\d+\\.?\\d*";
    export const BOOLEAN = "true|false";
    export const STRING = "(.*)";
}

const none =
    (parenthesis: string) =>
    (str: string): boolean => {
        for (const ch of str) if (ch !== parenthesis) return true;
        return false;
    };
