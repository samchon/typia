import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";

export interface DynamicComposite {
    id: string;
    name: string;
    [index: number]: number;
    [key: `prefix_${string}`]: string;
    [key: `${string}_postfix`]: string;
    [key: `value_${number}`]: boolean | string | number;
    [key: `between_${string}_and_${number}`]: boolean;
}
export namespace DynamicComposite {
    export function generate(): DynamicComposite {
        const number = () => Math.random() - 0.5;
        const string = () => RandomGenerator.string();
        const output: DynamicComposite = {
            id: "id",
            name: "name",
        };

        ArrayUtil.repeat(RandomGenerator.integer(3, 10), () => {
            output[number()] = number();
            output[`prefix_${string()}`] = string();
            output[`${string()}_postfix`] = string();
            output[`value_${number()}`] = number() < 0;
            output[`value_${number()}`] = number();
            output[`value_${number()}`] = string();
            output[`between_${string()}_and_${number()}`] = number() > 0;
        });
        return output;
    }
}
