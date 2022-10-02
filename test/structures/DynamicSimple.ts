import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";

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
}
