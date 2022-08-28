import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayAtomicAlias = [
    ArrayAtomicAlias.Alias<boolean>,
    ArrayAtomicAlias.Alias<number>,
    ArrayAtomicAlias.Alias<string>,
];
export namespace ArrayAtomicAlias {
    export type Alias<T> = T[];
    export function generate(): ArrayAtomicAlias {
        return [
            RandomGenerator.array(RandomGenerator.boolean),
            RandomGenerator.array(RandomGenerator.integer),
            RandomGenerator.array(RandomGenerator.string),
        ];
    }
}
