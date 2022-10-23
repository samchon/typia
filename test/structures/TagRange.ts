import { Spoiler } from "../internal/Spoiler";

export type TagRange = TagRange.Type[];
export namespace TagRange {
    export interface Type {
        /**
         * @minimum 3
         */
        minimum: number;

        /**
         * @maximum 7
         */
        maximum: number;

        /**
         * @minimum 3
         * @maximum 7
         */
        minimum_and_maximum: number;

        /**
         * @range (3
         */
        greater: number;

        /**
         * @range [3
         */
        greater_equal: number;

        /**
         * @range 7)
         */
        less: number;

        /**
         * @range 7]
         */
        less_equal: number;

        /**
         * @range (3, 7)
         */
        greater_less: number;

        /**
         * @range [3, 7)
         */
        greater_equal_less: number;

        /**
         * @range (3, 7]
         */
        greater_less_equal: number;

        /**
         * @range [3, 7]
         */
        greater_equal_less_equal: number;
    }

    // prettier-ignore
    export function generate(): Type[] {
        const output: Type[] = [];

        for (const minimum of [MINIMUM, 10])
        for (const maximum of [0, MAXIMUM])
        for (const minimum_and_maximum of [MINIMUM, MAXIMUM])
        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM])
            output.push({
                minimum,
                maximum,
                minimum_and_maximum,
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
            });
        return output;
    }

    export const MINIMUM = 3;
    export const MAXIMUM = 7;

    export const SPOILERS: Spoiler<TagRange>[] = [
        (input) => {
            input[0].minimum = 2;
            return ["$input[0].minimum"];
        },
        (input) => {
            input[1].maximum = 8;
            return ["$input[1].maximum"];
        },
        (input) => {
            input[2].minimum_and_maximum = 2;
            return ["$input[2].minimum_and_maximum"];
        },
        (input) => {
            input[3].minimum_and_maximum = 8;
            return ["$input[3].minimum_and_maximum"];
        },
        (input) => {
            input[4].greater = 3;
            return ["$input[4].greater"];
        },
        (input) => {
            input[5].greater_equal = 2;
            return ["$input[5].greater_equal"];
        },
        (input) => {
            input[6].less = 7;
            return ["$input[6].less"];
        },
        (input) => {
            input[7].less_equal = 8;
            return ["$input[7].less_equal"];
        },
        (input) => {
            input[8].greater_less = 3;
            return ["$input[8].greater_less"];
        },
        (input) => {
            input[9].greater_less = 7;
            return ["$input[9].greater_less"];
        },
        (input) => {
            input[10].greater_equal_less = 2;
            return ["$input[10].greater_equal_less"];
        },
        (input) => {
            input[11].greater_equal_less = 7;
            return ["$input[11].greater_equal_less"];
        },
        (input) => {
            input[12].greater_less_equal = 3;
            return ["$input[12].greater_less_equal"];
        },
        (input) => {
            input[13].greater_less_equal = 8;
            return ["$input[13].greater_less_equal"];
        },
        (input) => {
            input[14].greater_equal_less_equal = 2;
            return ["$input[14].greater_equal_less_equal"];
        },
        (input) => {
            input[15].greater_equal_less_equal = 8;
            return ["$input[15].greater_equal_less_equal"];
        },
    ];
}
