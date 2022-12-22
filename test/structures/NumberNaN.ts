import { Spoiler } from "../internal/Spoiler";

export interface NumberNaN {
    value: number;

    /**
     * @minimum 0
     * @maximum 100
     */
    ranged: number;

    /**
     * @minimum 0
     */
    minimum: number;

    /**
     * @maximum 100
     */
    maximum: number;

    /**
     * @type int
     */
    typed: number;
}
export namespace NumberNaN {
    export const JSONABLE = false;

    export function generate(): NumberNaN {
        return {
            value: 1,
            ranged: 1,
            minimum: 1,
            maximum: 1,
            typed: 1,
        };
    }

    export const SPOILERS: Spoiler<NumberNaN>[] = [
        (input) => {
            input.value = NaN;
            return ["$input.value"];
        },
        (input) => {
            input.ranged = Number("invalid");
            return ["$input.ranged"];
        },
        (input) => {
            input.minimum = Number("minimum");
            return ["$input.minimum"];
        },
        (input) => {
            input.maximum = Number("maximum");
            return ["$input.maximum"];
        },
        (input) => {
            input.typed = Number("wrong");
            return ["$input.typed"];
        },
    ];
}
