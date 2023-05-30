import { Spoiler } from "../helpers/Spoiler";

export type DefinitionArrayRecursiveOptional =
    | undefined
    | number
    | string
    | DefinitionArrayRecursiveOptional[];
export namespace DefinitionArrayRecursiveOptional {
    export function generate(): DefinitionArrayRecursiveOptional {
        return [
            undefined,
            1,
            "two",
            [undefined, 3, "four", [undefined, 1, "two"]],
        ];
    }
    export const SPOILERS: Spoiler<DefinitionArrayRecursiveOptional>[] = [
        (input) => {
            (input as any)[0] = BigInt(3) as any;
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
