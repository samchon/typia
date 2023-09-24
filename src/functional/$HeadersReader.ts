export namespace $HeadersReader {
    export const boolean = (value: string | undefined) =>
        value !== undefined ? value === "true" : undefined;
    export const bigint = (value: string | undefined) =>
        value !== undefined ? BigInt(value) : undefined;
    export const number = (value: string | undefined) =>
        value !== undefined ? Number(value) : undefined;
    export const string = (value: string | undefined) => value;
}
