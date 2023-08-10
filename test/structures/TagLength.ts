import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TagLength = IPointer<TagLength.Type[]>;
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

    export function generate(): TagLength {
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
        return { value: output };
    }

    export const FIXED = 5;
    export const MINIMUM = 3;
    export const MAXIMUM = 7;

    export const SPOILERS: Spoiler<TagLength>[] = [
        (input) => {
            input.value[0].fixed = "123456";
            return ["$input.value[0].fixed"];
        },
        (input) => {
            input.value[1].minimum = "12";
            return ["$input.value[1].minimum"];
        },
        (input) => {
            input.value[2].maximum = "12345678";
            return ["$input.value[2].maximum"];
        },
        (input) => {
            input.value[3].minimum_and_maximum = "12";
            return ["$input.value[3].minimum_and_maximum"];
        },
        (input) => {
            input.value[4].minimum_and_maximum = "12345678";
            return ["$input.value[4].minimum_and_maximum"];
        },
    ];
}
