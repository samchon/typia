import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ArrayUnion = ArrayUnion.IUnion[];
export namespace ArrayUnion {
    export type IUnion = boolean[] | number[] | string[];
    export function generate(): ArrayUnion {
        return [
            RandomGenerator.array(RandomGenerator.boolean),
            RandomGenerator.array(RandomGenerator.integer),
            RandomGenerator.array(RandomGenerator.string),
        ];
    }
    export const SPOILERS: Spoiler<ArrayUnion>[] = [
        (input) => {
            input[0] = [false, true, 3] as boolean[];
            return ["$input[0][2]"];
        },
        (input) => {
            input[1] = [1, 2, false] as number[];
            return ["$input[1][2]"];
        },
        (input) => {
            input[2] = ["a", "b", 3] as string[];
            return ["$input[2][2]"];
        },
        (input) => {
            input[0] = [[]] as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = [null!];
            return ["$input[1]"];
        },
    ];
}
