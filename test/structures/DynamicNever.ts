import { ArrayUtil } from "../../src/utils/ArrayUtil";
import { TestRandomGenerator } from "../internal/TestRandomGenerator";

import { Spoiler } from "../internal/Spoiler";

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
}
