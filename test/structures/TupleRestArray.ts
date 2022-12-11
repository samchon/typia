import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type TupleRestArray = [boolean, number, ...string[][]];
export namespace TupleRestArray {
    export function generate(): TupleRestArray {
        return [
            false,
            1,
            ...new Array(3)
                .fill("")
                .map(() => RandomGenerator.array(RandomGenerator.string)),
        ];
    }

    export const SPOILERS: Spoiler<TupleRestArray>[] = [
        (input) => {
            input[0] = null as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = "number" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2][0] = 0 as any;
            return ["$input[2][0]"];
        },
        (input) => {
            input[3][1] = false as any;
            return ["$input[3][1]"];
        },
        (input) => {
            input[4][2] = {} as any;
            return ["$input[4][2]"];
        },
    ];
}
