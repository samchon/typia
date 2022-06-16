export type ConstantAtomicSimple<T> = ConstantAtomicSimple.Value<T>;
export namespace ConstantAtomicSimple {
    export type Value<T> = T;
    export function generate<T>(value: T): ConstantAtomicSimple<T> {
        return value;
    }
}
