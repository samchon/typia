import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ArrayAtomicAlias>[] = [
        (input) => {
            input[0]![0]! = "boolean" as any;
            return ["$input[0][0]"];
        },
        (input) => {
            input[1]![0]! = "number" as any;
            return ["$input[1][0]"];
        },
        (input) => {
            input[2]![0]! = false as any;
            return ["$input[2][0]"];
        },
    ];
}
