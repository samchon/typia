export type AtomicAlias = [
    AtomicAlias.Alias<boolean>,
    AtomicAlias.Alias<number>,
    AtomicAlias.Alias<string>,
];
export namespace AtomicAlias {
    export type Alias<T> = T;
    export function generate(): AtomicAlias {
        return [false, 1, "two"];
    }
}
