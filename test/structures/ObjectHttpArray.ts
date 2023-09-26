import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import { Spoiler } from "../helpers/Spoiler";

export interface ObjectHttpArray {
    booleans: boolean[];
    bigints: bigint[];
    numbers: number[];
    strings: string[];
    templates: Array<`something_${string}`>;
}
export namespace ObjectHttpArray {
    export const HEADERS = true;
    export const QUERY = true;
    export const JSONABLE = false;

    export function generate(): ObjectHttpArray {
        return {
            booleans: RandomGenerator.array(() => Math.random() < 0.5),
            bigints: RandomGenerator.array(() => RandomGenerator.bigint()),
            numbers: RandomGenerator.array(() => RandomGenerator.number()),
            strings: RandomGenerator.array(() => RandomGenerator.string(10)),
            templates: RandomGenerator.array(
                () => `something_${RandomGenerator.string(10)}` as any,
            ),
        };
    }

    export const SPOILERS: Spoiler<ObjectHttpArray>[] = [
        (input) => {
            input.booleans = [false, true, "N" as any];
            return ["$input.booleans[2]"];
        },
        (input) => {
            input.bigints = [0n, 1n, 2n, "three" as any];
            return ["$input.bigints[3]"];
        },
        (input) => {
            input.numbers = [0, "one" as any];
            return ["$input.numbers[1]"];
        },
        (input) => {
            input.templates = [
                "something_a",
                "something_b",
                "nothing_c" as any,
            ];
            return ["$input.templates[2]"];
        },
    ];
}
