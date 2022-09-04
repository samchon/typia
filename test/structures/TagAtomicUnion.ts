import { RandomGenerator } from "../internal/RandomGenerator";

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
}
