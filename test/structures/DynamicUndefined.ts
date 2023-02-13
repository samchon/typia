import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export interface DynamicUndefined {
    [key: string]: undefined;
}
export namespace DynamicUndefined {
    export function generate(): DynamicUndefined {
        const output: DynamicUndefined = {};
        ArrayUtil.repeat(RandomGenerator.integer(3, 10), () => {
            output[RandomGenerator.string()] = undefined;
        });
        return output;
    }

    export const SPOILERS: Spoiler<DynamicUndefined>[] = [
        (input) => {
            input["something"] = "one" as any;
            return [`$input.something`];
        },
        (input) => {
            input["wrong"] = null!;
            return [`$input.wrong`];
        },
    ];

    export const ADDABLE = false;
}
