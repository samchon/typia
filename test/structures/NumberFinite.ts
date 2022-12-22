import { Spoiler } from "../internal/Spoiler";

export interface NumberFinite {
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
export namespace NumberFinite {
    export const JSONABLE = false;

    export function generate(): NumberFinite {
        return {
            value: 1,
            ranged: 1,
            minimum: 1,
            maximum: 1,
            typed: 1,
        };
    }

    export const SPOILERS: Spoiler<NumberFinite>[] = [
        (input) => {
            input.value = -Infinity;
            return ["$input.value"];
        },
        (input) => {
            input.ranged = Infinity;
            return ["$input.ranged"];
        },
        (input) => {
            input.minimum = Infinity;
            return ["$input.minimum"];
        },
        (input) => {
            input.maximum = -Infinity;
            return ["$input.maximum"];
        },
        (input) => {
            input.typed = 1.0 / 0.0;
            return ["$input.typed"];
        },
    ];
}
