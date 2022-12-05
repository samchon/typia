import { Spoiler } from "../internal/Spoiler";

export type TupleHierarchical = [
    boolean,
    null,
    number,
    [boolean, null, [number, [boolean, string]]],
    [
        number,
        Array<[string, boolean, Array<[number, number, [boolean, string]]>]>,
    ],
];
export namespace TupleHierarchical {
    export function generate(): TupleHierarchical {
        return [
            false,
            null,
            1,
            [false, null, [1, [false, "string"]]],
            [3, [["string", false, [[1, 1, [false, "string"]]]]]],
        ];
    }

    export const SPOILERS: Spoiler<TupleHierarchical>[] = [
        (input) => {
            input[0] = "boolean" as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = false as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = { value: "number" } as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3][0] = "boolean" as any;
            return ["$input[3][0]"];
        },
        (input) => {
            input[3][1] = "x" as any;
            return ["$input[3][1]"];
        },
        (input) => {
            input[3][2][0] = "number" as any;
            return ["$input[3][2][0]"];
        },
        (input) => {
            input[3][2][1][0] = "boolean" as any;
            return ["$input[3][2][1][0]"];
        },
        (input) => {
            input[3][2][1][1] = 0 as any;
            return ["$input[3][2][1][1]"];
        },
        (input) => {
            input[4][0] = true as any;
            return ["$input[4][0]"];
        },
        (input) => {
            input[4][1][0] = [] as any;
            return ["$input[4][1][0]"];
        },
        (input) => {
            input[4][1][0][0] = { value: "string" } as any;
            return ["$input[4][1][0][0]"];
        },
        (input) => {
            input[4][1][0][1] = "false" as any;
            return ["$input[4][1][0][1]"];
        },
        (input) => {
            input[4][1][0][2][0][0] = "number" as any;
            return ["$input[4][1][0][2][0][0]"];
        },
        (input) => {
            input[4][1][0][2][0][1] = "number" as any;
            return ["$input[4][1][0][2][0][1]"];
        },
        (input) => {
            input[4][1][0][2][0][2][0] = "false" as any;
            return ["$input[4][1][0][2][0][2][0]"];
        },
        (input) => {
            input[4][1][0][2][0][2][1] = { value: "string" } as any;
            return ["$input[4][1][0][2][0][2][1]"];
        },
    ];
}
