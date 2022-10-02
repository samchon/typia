import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";

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
}
