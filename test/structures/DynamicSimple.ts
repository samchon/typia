import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export interface DynamicSimple {
    [key: string]: number;
}
export namespace DynamicSimple {
    export function generate(): DynamicSimple {
        const output: DynamicSimple = {};
        ArrayUtil.repeat(RandomGenerator.integer(3, 10), () => {
            output[RandomGenerator.string()] = Math.random();
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
}
