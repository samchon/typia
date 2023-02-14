import { ArrayUtil } from "../../src/utils/ArrayUtil";
import { TestRandomGenerator } from "../internal/TestRandomGenerator";

import { Spoiler } from "../internal/Spoiler";

export interface DynamicUndefined {
    [key: string]: undefined;
}
export namespace DynamicUndefined {
    export function generate(): DynamicUndefined {
        const output: DynamicUndefined = {};
        ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
            output[TestRandomGenerator.string()] = undefined;
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
