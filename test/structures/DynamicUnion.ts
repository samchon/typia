import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export interface DynamicUnion {
    [key: number | `prefix_${string}` | `${string}_postfix`]: string;
    [key: `value_between_${number}_and_${number}`]: number;
}
export namespace DynamicUnion {
    export function generate(): DynamicUnion {
        const number = () => Math.random() - 0.5;
        const string = () => RandomGenerator.string();
        const output: DynamicUnion = {};

        ArrayUtil.repeat(RandomGenerator.integer(3, 10), () => {
            output[Math.random()] = string();
            output[`prefix_${string()}`] = string();
            output[`${string()}_postfix`] = string();
            output[`value_between_${number()}_and_${number()}`] = number();
        });
        return output;
    }

    export const SPOILERS: Spoiler<DynamicUnion>[] = [
        (input) => {
            input["0"] = false as any;
            return [`$input["0"]`];
        },
        (input) => {
            input["prefix_wrong"] = 1 as any;
            return [`$input.prefix_wrong`];
        },
        (input) => {
            input["wrong_postfix"] = 2 as any;
            return [`$input.wrong_postfix`];
        },
        (input) => {
            input["value_between_1_and_2"] = "two" as any;
            return [`$input.value_between_1_and_2`];
        },
    ];

    export const BINARABLE = false;
}
