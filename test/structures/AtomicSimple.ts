export type AtomicSimple = [
    AtomicSimple.Value<boolean>,
    AtomicSimple.Value<number>,
    AtomicSimple.Value<string>,
];
export namespace AtomicSimple {
    export type Value<T> = T;
    export function generate(): AtomicSimple {
        return [false, 1, "two"];
    }
}
