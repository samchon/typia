import { Spoiler } from "../internal/Spoiler";

export type TagStep = TagStep.Type[];
export namespace TagStep {
    export interface Type {
        /**
         * @step 5
         * @exclusiveMinimum 3
         */
        exclusiveMinimum: number;

        /**
         * @step 5
         * @minimum 3
         */
        minimum: number;

        /**
         * @step 5
         * @range (0, 100)
         */
        range: number;

        /**
         * @multipleOf 5
         */
        multipleOf: number;
    }

    // prettier-ignore
    export function generate(): Type[] {
        const output: Type[] = [];
        for (const exclusiveMinimum of [8, 8+5])
        for (const minimum of [3, 3+5])
        for (const range of [5, 95])
        for (const multipleOf of [5, 10])
            output.push({
                exclusiveMinimum, 
                minimum, 
                range, 
                multipleOf
            });
        return output;
    }

    export const SPOILERS: Spoiler<TagStep>[] = [
        (input) => {
            input[0].exclusiveMinimum = 3;
            return ["$input[0].exclusiveMinimum"];
        },
        (input) => {
            input[1].exclusiveMinimum = 4;
            return ["$input[1].exclusiveMinimum"];
        },
        (input) => {
            input[2].minimum = 2;
            return ["$input[2].minimum"];
        },
        (input) => {
            input[3].minimum = 4;
            return ["$input[3].minimum"];
        },
        (input) => {
            input[4].range = 0;
            return ["$input[4].range"];
        },
        (input) => {
            input[5].range = 100;
            return ["$input[5].range"];
        },
        (input) => {
            input[6].range = 4;
            return ["$input[6].range"];
        },
        (input) => {
            input[7].multipleOf = 4;
            return ["$input[7].multipleOf"];
        },
    ];
}
