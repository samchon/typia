import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TagStep = IPointer<TagStep.Type[]>;
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
         * @exclusiveMinimum 0
         * @exclusiveMaximum 100
         */
        range: number;

        /**
         * @multipleOf 5
         * @minimum 3
         * @maximum 99
         */
        multipleOf: number;
    }

    // prettier-ignore
    export function generate(): TagStep {
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
        return {value:output};
    }

    export const SPOILERS: Spoiler<TagStep>[] = [
        (input) => {
            input.value[0].exclusiveMinimum = 3;
            return ["$input.value[0].exclusiveMinimum"];
        },
        (input) => {
            input.value[1].exclusiveMinimum = 4;
            return ["$input.value[1].exclusiveMinimum"];
        },
        (input) => {
            input.value[2].minimum = 2;
            return ["$input.value[2].minimum"];
        },
        (input) => {
            input.value[3].minimum = 4;
            return ["$input.value[3].minimum"];
        },
        (input) => {
            input.value[4].range = 0;
            return ["$input.value[4].range"];
        },
        (input) => {
            input.value[5].range = 100;
            return ["$input.value[5].range"];
        },
        (input) => {
            input.value[6].range = 4;
            return ["$input.value[6].range"];
        },
        (input) => {
            input.value[7].multipleOf = 4;
            return ["$input.value[7].multipleOf"];
        },
    ];
}
