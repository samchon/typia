import { Spoiler } from "../helpers/Spoiler";

export type DefinitionArrayRecursiveRequired =
    | number
    | string
    | DefinitionArrayRecursiveRequired[];
export namespace DefinitionArrayRecursiveRequired {
    export function generate(): DefinitionArrayRecursiveRequired {
        return [0, 1, "two", [2, 3, "four", [[], 1, "two"]]];
    }
    export const SPOILERS: Spoiler<DefinitionArrayRecursiveRequired>[] = [
        (input) => {
            (input as any)[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            (input as any)[1] = null!;
            return ["$input[1]"];
        },
        (input) => {
            (input as any)[2] = false as any;
            return ["$input[2]"];
        },
        (input) => {
            (input as any)[3][2] = {};
            return ["$input[3][2]"];
        },
    ];

    export const ADDABLE: boolean = false;
    export const JSONABLE: boolean = false;
}
