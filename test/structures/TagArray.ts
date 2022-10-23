import { v4 } from "uuid";

import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type TagArray = TagArray.Type[];
export namespace TagArray {
    export interface Type {
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

    // prettier-ignore
    export function generate(): Type[] {
        const output: Type[] = [];
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

    export const SPOILERS: Spoiler<TagArray>[] = [
        (input) => {
            input[0].items = ["0", "1", "2"];
            return [
                "$input[0].items[0]",
                "$input[0].items[1]",
                "$input[0].items[2]",
            ];
        },
        (input) => {
            input[1].items = RandomGenerator.array(() => v4(), 2);
            return ["$input[1].items"];
        },
        (input) => {
            input[2].items = RandomGenerator.array(() => v4(), 7);
            return ["$input[2].items"];
        },
        (input) => {
            input[3].minItems = [0, 1, 2];
            return [
                "$input[3].minItems[0]",
                "$input[3].minItems[1]",
                "$input[3].minItems[2]",
            ];
        },
        (input) => {
            input[4].minItems = RandomGenerator.array(() => 3, 2);
            return ["$input[4].minItems"];
        },
        (input) => {
            input[5].maxItems = [8];
            return ["$input[5].maxItems[0]"];
        },
        (input) => {
            input[6].maxItems = ["12345678"];
            return ["$input[6].maxItems[0]"];
        },
        (input) => {
            input[7].maxItems = RandomGenerator.array(() => 1, 8);
            return ["$input[7].maxItems"];
        },
        (input) => {
            input[8].both = ["0", "1", "2"];
            return [
                "$input[8].both[0]",
                "$input[8].both[1]",
                "$input[8].both[2]",
            ];
        },
        (input) => {
            input[9].both = RandomGenerator.array(() => v4(), 2);
            return ["$input[9].both"];
        },
        (input) => {
            input[10].both = RandomGenerator.array(() => v4(), 8);
            return ["$input[10].both"];
        },
    ];
}
