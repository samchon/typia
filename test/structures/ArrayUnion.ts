import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayUnion =
    | boolean[]
    | number[]
    | string[]
    | Array<boolean | number | string>;
export namespace ArrayUnion {
    export function generate(): ArrayUnion[] {
        return [
            RandomGenerator.array(RandomGenerator.boolean),
            RandomGenerator.array(RandomGenerator.number),
            RandomGenerator.array(RandomGenerator.string),
            [
                RandomGenerator.boolean(),
                RandomGenerator.string(),
                RandomGenerator.number(),
            ],
        ];
    }
}
