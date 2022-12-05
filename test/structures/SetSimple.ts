import { Spoiler } from "../internal/Spoiler";

export interface SetSimple {
    booleans: Set<boolean>;
    numbers: Set<number>;
    strings: Set<string>;
    arrays: Set<Array<number>>;
    objects: Set<SetSimple.Person>;
}
export namespace SetSimple {
    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export const ADDABLE = false;
    export const PRIMITIVE = false;

    export function generate(): SetSimple {
        return {
            booleans: new Set([true, false]),
            numbers: new Set([1, 2, 3]),
            strings: new Set(["a", "b", "c"]),
            arrays: new Set([
                [1, 2, 3],
                [4, 5, 6],
            ]),
            objects: new Set([
                { id: "1", name: "John", age: 20 },
                { id: "2", name: "Jane", age: 21 },
            ]),
        };
    }

    export const SPOILERS: Spoiler<SetSimple>[] = [
        (input) => {
            input.booleans = new Set([true, false, "something"]) as any;
            return ["$input.booleans[2]"];
        },
        (input) => {
            input.numbers = new Set([1, 2, 3, "something"]) as any;
            return ["$input.numbers[3]"];
        },
        (input) => {
            input.strings = new Set(["a", "b", "c", 1]) as any;
            return ["$input.strings[3]"];
        },
        (input) => {
            input.arrays = new Set([[1, 2, 3], [4, 5, 6], null!]) as any;
            return ["$input.arrays[2]"];
        },
        (input) => {
            input.objects = new Set([
                { id: "1", name: "John", age: 20 },
                { id: "2", name: "Jane", age: 21 },
                { id: "3", name: "Jane", age: null! },
            ]) as any;
            return ["$input.objects[2].age"];
        },
        (input) => {
            input.booleans = new Map() as any;
            return ["$input.booleans"];
        },
        (input) => {
            input.numbers = {} as any;
            return ["$input.numbers"];
        },
        (input) => {
            input.strings = [] as any;
            return ["$input.strings"];
        },
        (input) => {
            input.arrays = null! as any;
            return ["$input.arrays"];
        },
        (input) => {
            input.objects = undefined as any;
            return ["$input.objects"];
        },
    ];
}
