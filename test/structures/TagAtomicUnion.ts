import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export interface TagAtomicUnion {
    /**
     * @minimum 3
     * @length [3, 7]
     */
    value: number | string;
}
export namespace TagAtomicUnion {
    export function generate(): TagAtomicUnion[] {
        const output: TagAtomicUnion[] = [];
        for (const value of [3, 7])
            output.push({ value: RandomGenerator.string(value) });
        output.push({ value: 3 });
        return output;
    }
    export const SPOILERS: Spoiler<TagAtomicUnion[]>[] = [
        (input) => {
            input[0].value = "12";
            return ["$input[0].value"];
        },
        (input) => {
            input[1].value = "12345678";
            return ["$input[1].value"];
        },
        (input) => {
            input[2].value = 2;
            return ["$input[2].value"];
        },
    ];
}
