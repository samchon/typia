import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TagRange = IPointer<TagRange.Type[]>;
export namespace TagRange {
    export interface Type {
        /**
         * @exclusiveMinimum 3
         */
        greater: number;

        /**
         * @minimum 3
         */
        greater_equal: number;

        /**
         * @exclusiveMaximum 7
         */
        less: number;

        /**
         * @maximum 7
         */
        less_equal: number;

        /**
         * @exclusiveMinimum 3
         * @exclusiveMaximum 7
         */
        greater_less: number;

        /**
         * @minimum 3
         * @exclusiveMaximum 7
         */
        greater_equal_less: number;

        /**
         * @exclusiveMinimum 3
         * @maximum 7
         */
        greater_less_equal: number;

        /**
         * @minimum 3
         * @maximum 7
         */
        greater_equal_less_equal: number;

        /**
         * @minimum 10
         * @maximum 10
         */
        equal: number;
    }

    // prettier-ignore
    export function generate(): TagRange {
        const output: Type[] = [];

        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM])
            output.push({
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
                equal: 10,
            });
        return { value: output };
    }

    export const MINIMUM = 3;
    export const MAXIMUM = 7;

    export const SPOILERS: Spoiler<TagRange>[] = [
        (input) => {
            input.value[4].greater = 3;
            return ["$input.value[4].greater"];
        },
        (input) => {
            input.value[5].greater_equal = 2;
            return ["$input.value[5].greater_equal"];
        },
        (input) => {
            input.value[6].less = 7;
            return ["$input.value[6].less"];
        },
        (input) => {
            input.value[7].less_equal = 8;
            return ["$input.value[7].less_equal"];
        },
        (input) => {
            input.value[8].greater_less = 3;
            return ["$input.value[8].greater_less"];
        },
        (input) => {
            input.value[9].greater_less = 7;
            return ["$input.value[9].greater_less"];
        },
        (input) => {
            input.value[10].greater_equal_less = 2;
            return ["$input.value[10].greater_equal_less"];
        },
        (input) => {
            input.value[11].greater_equal_less = 7;
            return ["$input.value[11].greater_equal_less"];
        },
        (input) => {
            input.value[12].greater_less_equal = 3;
            return ["$input.value[12].greater_less_equal"];
        },
        (input) => {
            input.value[13].greater_less_equal = 8;
            return ["$input.value[13].greater_less_equal"];
        },
        (input) => {
            input.value[14].greater_equal_less_equal = 2;
            return ["$input.value[14].greater_equal_less_equal"];
        },
        (input) => {
            input.value[15].greater_equal_less_equal = 8;
            return ["$input.value[15].greater_equal_less_equal"];
        },
        (input) => {
            input.value[16].equal = 9;
            return ["$input.value[16].equal"];
        },
    ];
}
