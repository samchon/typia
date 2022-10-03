import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";

export interface DynamicTemplate {
    [key: `prefix_${string}`]: string;
    [key: `${string}_postfix`]: string;
    [key: `value_${number}`]: number;
    [key: `between_${string}_and_${number}`]: boolean;
}
export namespace DynamicTemplate {
    export function generate(): DynamicTemplate {
        const number = () => Math.random() - 0.5;
        const string = () => RandomGenerator.string();
        const output: DynamicTemplate = {};

        ArrayUtil.repeat(RandomGenerator.integer(3, 10), () => {
            output[`prefix_${string()}`] = string();
            output[`${string()}_postfix`] = string();
            output[`value_${number()}`] = number();
            output[`between_${string()}_and_${number() - 0.5}`] = number() > 0;
        });
        return output;
    }
}
