import { Spoiler } from "../helpers/Spoiler";

export type DefinitionArrayRecursiveNullable =
    | null
    | number
    | string
    | DefinitionArrayRecursiveNullable[];
export namespace DefinitionArrayRecursiveNullable {
    export function generate(): DefinitionArrayRecursiveNullable {
        return [null, 1, "two", [null, 3, "four", [null, 1, "two"]]];
    }
    export const SPOILERS: Spoiler<DefinitionArrayRecursiveNullable>[] = [
        (input) => {
            (input as any)[0] = BigInt(3) as any;
            return ["$input[0]"];
        },
        (input) => {
            (input as any)[1] = undefined!;
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
}
