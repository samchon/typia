import { Spoiler } from "../internal/Spoiler";

export interface TagType {
    /**
     * Integer value.
     *
     * @type int
     */
    int: number;

    /**
     * Unsigned integer value.
     *
     * @type uint
     */
    uint: number;
}
export namespace TagType {
    export function generate(): TagType[] {
        const output: TagType[] = [];
        for (const int of [-1, 0, 1])
            for (const uint of [0, 1, 2]) output.push({ int, uint });
        return output;
    }

    export const SPOILERS: Spoiler<TagType[]>[] = [
        (input) => {
            input[0].int = 0.1;
            return ["$input[0].int"];
        },
        (input) => {
            input[1].uint = -1;
            return ["$input[1].uint"];
        },
        (input) => {
            input[2].uint = 0.5;
            return ["$input[2].uint"];
        },
        (input) => {
            input[3].uint = -0.5;
            return ["$input[3].uint"];
        },
    ];
}
