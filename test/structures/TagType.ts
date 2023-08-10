import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TagType = IPointer<TagType.Type[]>;
export namespace TagType {
    export interface Type {
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

    export function generate(): TagType {
        const output: Type[] = [];
        for (const int of [-1, 0, 1])
            for (const uint of [0, 1, 2]) output.push({ int, uint });
        return { value: output };
    }

    export const SPOILERS: Spoiler<TagType>[] = [
        (input) => {
            input.value[0].int = 0.1;
            return ["$input.value[0].int"];
        },
        (input) => {
            input.value[1].uint = -1;
            return ["$input.value[1].uint"];
        },
        (input) => {
            input.value[2].uint = 0.5;
            return ["$input.value[2].uint"];
        },
        (input) => {
            input.value[3].uint = -0.5;
            return ["$input.value[3].uint"];
        },
    ];
}
