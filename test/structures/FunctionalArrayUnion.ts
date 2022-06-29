import { RandomGenerator } from "../internal/RandomGenerator";

export type FunctionalArrayUnion = FunctionalArrayUnion.Union[];
export namespace FunctionalArrayUnion {
    export type Union = Array<() => any> | number[] | string[] | null[];
    export function generate(): FunctionalArrayUnion {
        return [
            RandomGenerator.array(() => console.log),
            RandomGenerator.array(() => 1),
            RandomGenerator.array(() => "two"),
            RandomGenerator.array(() => null),
        ];
    }
}
