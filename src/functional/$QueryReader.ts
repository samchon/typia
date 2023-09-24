export namespace $QueryReader {
    export const boolean = (str: string | null): boolean | null | undefined =>
        str === null
            ? undefined
            : str === "null"
            ? null
            : str.length === 0
            ? true
            : str === "true" || str === "1"
            ? true
            : str === "false" || str === "0"
            ? false
            : (str as any); // wrong type

    export const number = (str: string | null): number | null | undefined =>
        !!str?.length ? (str === "null" ? null : Number(str)) : undefined;

    export const bigint = (str: string | null): bigint | null | undefined =>
        !!str?.length ? (str === "null" ? null : BigInt(str)) : undefined;

    export const string = (str: string | null): string | null | undefined =>
        str === null ? undefined : str === "null" ? null : str;

    export const params = (input: string | URLSearchParams) => {
        if (typeof input === "string") {
            const index: number = input.indexOf("?");
            input = index === -1 ? "" : input.substring(index + 1);
            return new URLSearchParams(input);
        }
        return input;
    };
}
