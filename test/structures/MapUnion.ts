import { Spoiler } from "../internal/Spoiler";

export type MapUnion = MapUnion.Union[];
export namespace MapUnion {
    export type Union =
        | Map<boolean, number>
        | Map<number, number>
        | Map<string, number>
        | Map<number[], number>
        | Map<MapUnion.Person, number>;
    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export const ADDABLE = false;
    export const PRIMITIVE = false;

    export function generate(): MapUnion {
        return [
            new Map([
                [true, 1],
                [false, 2],
            ]),
            new Map([
                [1, 1],
                [2, 2],
                [3, 3],
            ]),
            new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]),
            new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
            ]),
            new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
            ]),
            new Map() as any,
        ];
    }

    export const SPOILERS: Spoiler<MapUnion>[] = [
        // PERFECTLY WRONG
        (input) => {
            input[0] = {} as any;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = new Map([[undefined, null]]) as any;
            return ["$input[0]"];
        },
        // SPOIL KEYS
        (input) => {
            input[0] = new Map([
                [true, 1],
                [false, 2],
                ["something", 3] as any,
            ]) as any;
            return ["$input[0][2][0]"];
        },
        (input) => {
            input[1] = new Map([
                [1, 1],
                [2, 2],
                [3, 3],
                ["something" as any, 4],
            ]) as any;
            return ["$input[1][3][0]"];
        },
        (input) => {
            input[2] = new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
                [1 as any, 4],
            ]) as any;
            return ["$input[2][3][0]"];
        },
        (input) => {
            input[3] = new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
                [[7, 8, "9" as any], 3],
            ]);
            return ["$input[3][2][0][2]"];
        },
        (input) => {
            input[4] = new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
                [{ id: "3", name: "Jack", age: null! }, 3],
            ]);
            return ["$input[4][2][0].age"];
        },
        // SPOIL VALUES
        (input) => {
            input[0] = new Map([
                [true, 1],
                [false, "3" as any],
            ]) as any;
            return ["$input[0][1][1]"];
        },
        (input) => {
            input[1] = new Map([
                [1, 1],
                [2, "3" as any],
                [3, 3],
            ]) as any;
            return ["$input[1][1][1]"];
        },
        (input) => {
            input[2] = new Map([
                ["a", 1],
                ["b", "3" as any],
                ["c", 3],
            ]) as any;
            return ["$input[2][1][1]"];
        },
        (input) => {
            input[3] = new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], "3" as any],
            ]);
            return ["$input[3][1][1]"];
        },
        (input) => {
            input[4] = new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, "3" as any],
            ]);
            return ["$input[4][1][1]"];
        },
    ];
}
