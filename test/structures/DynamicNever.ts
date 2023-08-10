import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicNever {
    [key: string]: never;
}
export namespace DynamicNever {
    export function generate(): DynamicNever {
        const output: DynamicNever = {};
        ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
            (output as any)[TestRandomGenerator.string()] = undefined;
        });
        return output;
    }

    export const SPOILERS: Spoiler<DynamicNever>[] = [
        (input) => {
            (input as any)["something"] = "one" as any;
            return [`$input.something`];
        },
        (input) => {
            (input as any)["wrong"] = null!;
            return [`$input.wrong`];
        },
    ];

    export const ADDABLE = false;
    export const BINARABLE = false;
}
