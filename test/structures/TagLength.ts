import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type TagLength = TagLength.Type[];
export namespace TagLength {
    export interface Type {
        /**
         * @length 5
         */
        fixed: string;

        /**
         * @length (3
         */
        greater: string;

        /**
         * @length [3
         */
        greater_equal: string;

        /**
         * @length 7)
         */
        less: string;

        /**
         * @length 7]
         */
        less_equal: string;

        /**
         * @length (3, 7)
         */
        greater_less: string;

        /**
         * @length [3, 7)
         */
        greater_equal_less: string;

        /**
         * @length (3, 7]
         */
        greater_less_equal: string;

        /**
         * @length [3, 7]
         */
        greater_equal_less_equal: string;

        /**
         * @minLength 3
         */
        minimum: string;

        /**
         * @maxLength 7
         */
        maximum: string;

        /**
         * @minLength 3
         * @maxLength 7
         */
        minimum_and_maximum: string;
    }

    // prettier-ignore
    export function generate(): Type[] {
        const output: Type[] = [];

        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM]) 
        for (const minimum_and_maximum of [MINIMUM, MAXIMUM]) {
            const numeric = {
                fixed: FIXED,
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
                minimum: MINIMUM,
                maximum: MAXIMUM,
                minimum_and_maximum
            };
            const obj: Type = {} as any;
            for (const [key, value] of Object.entries(numeric))
                (obj as any)[key] = RandomGenerator.string(value);
            output.push(obj);
        }
        return output;
    }

    export const FIXED = 5;
    export const MINIMUM = 3;
    export const MAXIMUM = 7;

    export const SPOILERS: Spoiler<TagLength>[] = [
        (input) => {
            input[0].fixed = "123456";
            return ["$input[0].fixed"];
        },
        (input) => {
            input[1].greater = "123";
            return ["$input[1].greater"];
        },
        (input) => {
            input[2].greater_equal = "12";
            return ["$input[2].greater_equal"];
        },
        (input) => {
            input[3].less = "1234567";
            return ["$input[3].less"];
        },
        (input) => {
            input[4].less_equal = "12345678";
            return ["$input[4].less_equal"];
        },
        (input) => {
            input[5].greater_less = "123";
            return ["$input[5].greater_less"];
        },
        (input) => {
            input[6].greater_less = "1234567";
            return ["$input[6].greater_less"];
        },
        (input) => {
            input[7].greater_equal_less = "12";
            return ["$input[7].greater_equal_less"];
        },
        (input) => {
            input[8].greater_equal_less = "1234567";
            return ["$input[8].greater_equal_less"];
        },
        (input) => {
            input[9].greater_less_equal = "123";
            return ["$input[9].greater_less_equal"];
        },
        (input) => {
            input[10].greater_less_equal = "12345678";
            return ["$input[10].greater_less_equal"];
        },
        (input) => {
            input[11].greater_equal_less_equal = "12";
            return ["$input[11].greater_equal_less_equal"];
        },
        (input) => {
            input[12].greater_equal_less_equal = "12345678";
            return ["$input[12].greater_equal_less_equal"];
        },
        (input) => {
            input[13].minimum = "12";
            return ["$input[13].minimum"];
        },
        (input) => {
            input[14].maximum = "12345678";
            return ["$input[14].maximum"];
        },
        (input) => {
            input[15].minimum_and_maximum = "12";
            return ["$input[15].minimum_and_maximum"];
        },
        (input) => {
            input[15].minimum_and_maximum = "12345678";
            return ["$input[15].minimum_and_maximum"];
        },
    ];
}
