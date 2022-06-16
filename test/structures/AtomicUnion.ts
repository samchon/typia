export type AtomicUnion = AtomicUnion.Union[];
export namespace AtomicUnion {
    export type Union = boolean | number | string | null;
    export function generate(): AtomicUnion {
        return [false, 1, "two", null];
    }
}
