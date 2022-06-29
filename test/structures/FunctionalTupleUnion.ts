export type FunctionalTupleUnion = [
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
];
export namespace FunctionalTupleUnion {
    export type Union = ((...args: any[]) => any) | number | string | null;
    export function generate(): FunctionalTupleUnion {
        return [console.log, 1, "two", null];
    }
}
