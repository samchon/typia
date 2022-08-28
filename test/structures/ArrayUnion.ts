import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayUnion = ArrayUnion.IUnion[];
export namespace ArrayUnion {
    export type IUnion = boolean[] | number[] | string[];
    export function generate(): ArrayUnion {
        return [
            RandomGenerator.array(RandomGenerator.boolean),
            RandomGenerator.array(RandomGenerator.integer),
            RandomGenerator.array(RandomGenerator.string),
        ];
    }
}
