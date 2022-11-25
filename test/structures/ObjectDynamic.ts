import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ObjectDynamic>[] = [
        (input) => {
            input.something = null!;
            return ["$input.something"];
        },
        (input) => {
            input.something = {} as any;
            return ["$input.something"];
        },
        (input) => {
            input.something = [] as any;
            return ["$input.something"];
        },
    ];

    export const ADDABLE = false;
}
