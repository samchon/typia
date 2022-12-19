import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type TupleRestAtomic = [boolean, number, ...string[]];
export namespace TupleRestAtomic {
    export function generate(): TupleRestAtomic {
        return [false, 1, ...new Array(3).fill("").map(RandomGenerator.string)];
    }

    export const SPOILERS: Spoiler<TupleRestAtomic>[] = [
        (input) => {
            input[0] = null as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = "number" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = 0 as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3] = false as any;
            return ["$input[3]"];
        },
        (input) => {
            input[4] = {} as any;
            return ["$input[4]"];
        },
    ];
}
