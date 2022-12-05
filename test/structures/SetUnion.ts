import { Spoiler } from "../internal/Spoiler";

export type SetUnion = SetUnion.Union[];
export namespace SetUnion {
    export type Union =
        | Set<boolean>
        | Set<number>
        | Set<string>
        | Set<number[]>
        | Set<SetUnion.Person>;
    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export const ADDABLE = false;
    export const PRIMITIVE = false;

    export function generate(): SetUnion {
        return [
            new Set([true, false]),
            new Set([1, 2, 3]),
            new Set(["a", "b", "c"]),
            new Set([
                [1, 2, 3],
                [4, 5, 6],
            ]),
            new Set([
                { id: "1", name: "John", age: 20 },
                { id: "2", name: "Jane", age: 21 },
            ]),
            new Set() as any,
        ];
    }

    export const SPOILERS: Spoiler<SetUnion>[] = [
        (input) => {
            input[0] = new Set([true, false, "something"]) as any;
            return ["$input[0][2]"];
        },
        (input) => {
            input[1] = new Set([1, 2, 3, "something"]) as any;
            return ["$input[1][3]"];
        },
        (input) => {
            input[2] = new Set(["a", "b", "c", 1]) as any;
            return ["$input[2][3]"];
        },
        (input) => {
            input[3] = new Set([null!, undefined!]) as any;
            return ["$input[3]"];
        },
        (input) => {
            input[4] = {} as any;
            return ["$input[4]"];
        },
        (input) => {
            input[5] = new Set([
                { id: "1", name: "John", age: 20 },
                { id: "2", name: "Jane", age: 21 },
                { id: "3", name: "Jane", age: null! },
            ]) as any;
            return ["$input[5][2].age"];
        },
    ];
}
