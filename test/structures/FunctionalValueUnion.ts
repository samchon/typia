import { Spoiler } from "../helpers/Spoiler";

export type FunctionalValueUnion = FunctionalValueUnion.Union[];
export namespace FunctionalValueUnion {
    export const BINARABLE = false;
    export const JSONABLE = false;

    export type Union = (() => any) | number | string | null;
    export function generate(): FunctionalValueUnion {
        return [console.log, 1, "two", null];
    }

    export const SPOILERS: Spoiler<FunctionalValueUnion>[] = [
        (input) => {
            input[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = {} as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = [] as any;
            return ["$input[2]"];
        },
    ];
}
