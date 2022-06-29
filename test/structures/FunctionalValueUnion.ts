export type FunctionalValueUnion = FunctionalValueUnion.Union[];
export namespace FunctionalValueUnion {
    export type Union = (() => any) | number | string | null;
    export function generate(): FunctionalValueUnion {
        return [console.log, 1, "two", null];
    }
}
