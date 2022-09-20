import { RandomGenerator } from "../internal/RandomGenerator";

export interface ObjectDynamic {
    [key: string]: number | string | boolean;
}
export namespace ObjectDynamic {
    export function generate(): ObjectDynamic {
        return {
            [RandomGenerator.string()]: RandomGenerator.integer(),
            [RandomGenerator.string()]: RandomGenerator.string(),
            [RandomGenerator.string()]: RandomGenerator.boolean(),
        };
    }
}
