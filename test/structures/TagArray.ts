import { v4 } from "uuid";

import { RandomGenerator } from "../internal/RandomGenerator";

export interface TagArray {
    /**
     * @items [3, 7)
     * @format uuid
     */
    items: string[];

    /**
     * @minItems 3
     * @minimum 3
     */
    minItems: number[];

    /**
     * @maxItems 7
     * @maxLength 7
     * @maximum 7
     */
    maxItems: Array<string | number>;

    /**
     * @minItems 3
     * @maxItems 7
     * @format uuid
     */
    both: string[];
}
export namespace TagArray {
    // prettier-ignore
    export function generate(): TagArray[] {
        const output: TagArray[] = [];
        for (const items of [3, 6])
        for (const minItems of [3, 10])
        for (const maxItems of [1, 7])
        for (const both of [3, 7]) {
            const string = () => RandomGenerator.string(maxItems);
            const number = () => maxItems;
            for (const closure of [string, number])
                output.push({
                    items: RandomGenerator.array(() => v4(), items),
                    minItems: RandomGenerator.array(() => minItems, minItems),
                    maxItems: RandomGenerator.array(() => closure(), maxItems),
                    both: RandomGenerator.array(() => v4(), both),
                });
        }
        return output;
    }
}
