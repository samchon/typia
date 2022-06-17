export type ConstantAtomicSimple = [
    ConstantAtomicSimple.Value<false>,
    ConstantAtomicSimple.Value<true>,
    ConstantAtomicSimple.Value<2>,
    ConstantAtomicSimple.Value<"three">,
];
export namespace ConstantAtomicSimple {
    export type Value<T> = T;
    export function generate(): ConstantAtomicSimple {
        return [false, true, 2, "three"];
    }
}
