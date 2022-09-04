import { RandomGenerator } from "../internal/RandomGenerator";

export type TagObjectUnion = TagObjectUnion.Numeric | TagObjectUnion.Literal;
export namespace TagObjectUnion {
    export interface Numeric {
        /**
         * @minimum 3
         */
        value: number;
    }
    export interface Literal {
        /**
         * @length [3, 7]
         */
        value: string;
    }
    export function generate(): TagObjectUnion[] {
        const output: TagObjectUnion[] = [];
        for (const value of [3, 7])
            output.push({ value: RandomGenerator.string(value) });
        output.push({ value: 3 });
        return output;
    }
}
