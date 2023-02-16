import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../internal/Spoiler";
import { TestRandomGenerator } from "../internal/TestRandomGenerator";

export interface DynamicSimple {
    [key: string]: number;
}
export namespace DynamicSimple {
    export function generate(): DynamicSimple {
        const output: DynamicSimple = {};
        ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
            output[TestRandomGenerator.string()] = Math.random();
        });
        return output;
    }

    export const SPOILERS: Spoiler<DynamicSimple>[] = [
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
