import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../internal/Spoiler";
import { TestRandomGenerator } from "../internal/TestRandomGenerator";

export type TagLength = TagLength.Type[];
export namespace TagLength {
    export interface Type {
        /**
         * @length 5
         */
        fixed: string;

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

    export function generate(): Type[] {
        const output: Type[] = [];

        ArrayUtil.repeat(4, () => {
            for (const minimum_and_maximum of [MINIMUM, MAXIMUM]) {
                const numeric = {
                    fixed: FIXED,
                    minimum: MINIMUM,
                    maximum: MAXIMUM,
                    minimum_and_maximum,
                };
                const obj: Type = {} as any;
                for (const [key, value] of Object.entries(numeric))
                    (obj as any)[key] = TestRandomGenerator.string(value);
                output.push(obj);
            }
        });
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
            input[1].minimum = "12";
            return ["$input[1].minimum"];
        },
        (input) => {
            input[2].maximum = "12345678";
            return ["$input[2].maximum"];
        },
        (input) => {
            input[3].minimum_and_maximum = "12";
            return ["$input[3].minimum_and_maximum"];
        },
        (input) => {
            input[4].minimum_and_maximum = "12345678";
            return ["$input[4].minimum_and_maximum"];
        },
    ];
}
