import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type FunctionalArrayUnion = FunctionalArrayUnion.Union[];
export namespace FunctionalArrayUnion {
    export const PRIMITIVE = false;

    export type Union = Array<() => any> | number[] | string[] | null[];
    export function generate(): FunctionalArrayUnion {
        return [
            RandomGenerator.array(() => console.log),
            RandomGenerator.array(() => 1),
            RandomGenerator.array(() => "two"),
            RandomGenerator.array(() => null),
        ];
    }

    export const SPOILERS: Spoiler<FunctionalArrayUnion>[] = [
        (input) => {
            input[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = {} as any;
            return ["$input[0]"];
        },
    ];
}
