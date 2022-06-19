export type ConstantAtomicUnion = ConstantAtomicUnion.Union[];
export namespace ConstantAtomicUnion {
    export type Union = false | 1 | 2 | "three" | "four" | { key: "key" };
    export function generate(): ConstantAtomicUnion {
        return [false, 1, 2, "three", "four", { key: "key" }];
    }
}
