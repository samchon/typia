import { RandomGenerator } from "../internal/RandomGenerator";

export type IArrayUnion =
    | boolean[]
    | number[]
    | string[]
    | Array<boolean | number | string>;
export namespace IArrayUnion {
    export function generate(): IArrayUnion[] {
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
