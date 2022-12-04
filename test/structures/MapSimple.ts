import { Spoiler } from "../internal/Spoiler";

export interface MapSimple {
    boolean: Map<boolean, number>;
    number: Map<number, number>;
    strings: Map<string, number>;
    arrays: Map<number[], number>;
    objects: Map<MapSimple.Person, number>;
}
export namespace MapSimple {
    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export const ADDABLE = false;
    export const PRIMITIVE = false;

    export function generate(): MapSimple {
        return {
            boolean: new Map([
                [true, 1],
                [false, 2],
            ]),
            number: new Map([
                [1, 1],
                [2, 2],
                [3, 3],
            ]),
            strings: new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]),
            arrays: new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
            ]),
            objects: new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
            ]),
        };
    }

    export const SPOILERS: Spoiler<MapSimple>[] = [
        // PERFECTLY WRONG
        (input) => {
            input.objects = {} as any;
            return ["$input.objects"];
        },
        (input) => {
            input.objects = new Map([[null, null]]) as any;
            return ["$input.objects[0][0]", "$input.objects[0][1]"];
        },
        // SPOIL KEYS
        (input) => {
            input.boolean = new Map([
                [true, 1],
                [false, 2],
                ["something", 3] as any,
            ]);
            return ["$input.boolean[2][0]"];
        },
        (input) => {
            input.number = new Map([
                [1, 1],
                [2, 2],
                [3, 3],
                ["something" as any, 4],
            ]);
            return ["$input.number[3][0]"];
        },
        (input) => {
            input.strings = new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
                [1 as any, 4],
            ]);
            return ["$input.strings[3][0]"];
        },
        (input) => {
            input.arrays = new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
                [null! as any, 3],
            ]);
            return ["$input.arrays[2][0]"];
        },
        (input) => {
            input.objects = new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
                [{ id: "3", name: "Jane", age: null! }, 3],
            ]);
            return ["$input.objects[2][0].age"];
        },
        // SPOIL VALUES
        (input) => {
            input.boolean = new Map([
                [true, 1],
                [false, "something" as any],
            ]);
            return ["$input.boolean[1][1]"];
        },
        (input) => {
            input.number = new Map([
                [1, 1],
                [2, 2],
                [3, null!],
            ]);
            return ["$input.number[2][1]"];
        },
        (input) => {
            input.strings = new Map([
                ["a", 1],
                ["b", 2],
                ["c", undefined!],
            ]);
            return ["$input.strings[2][1]"];
        },
        (input) => {
            input.arrays = new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
                [[7, 8, 9], {} as any],
            ]);
            return ["$input.arrays[2][1]"];
        },
        (input) => {
            input.objects = new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
                [{ id: "3", name: "Jane", age: 22 }, [] as any],
            ]);
            return ["$input.objects[2][1]"];
        },
    ];
}
