export namespace PatternUtil {
    export function escape(str: string): string {
        return str
            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
    }

    export const NUMBER = "\\d+(\\.\\d+)?";
    export const BOOLEAN = "true|false";
    export const STRING = "(.*)";
}
