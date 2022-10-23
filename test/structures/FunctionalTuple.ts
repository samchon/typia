import { Spoiler } from "../internal/Spoiler";

export type FunctionalTuple = [
    FunctionalTuple.Funtional,
    FunctionalTuple.Funtional,
    FunctionalTuple.Funtional,
];
export namespace FunctionalTuple {
    export type Funtional = (...args: any[]) => any;
    export function generate(): FunctionalTuple {
        return [console.log, console.log, console.log];
    }

    export const SPOILERS: Spoiler<FunctionalTuple>[] = [
        (input) => {
            input[0] = null!;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = undefined!;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = {} as any;
            return ["$input[2]"];
        },
        (input) => {
            input[0] = false as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = 1 as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = "string" as any;
            return ["$input[2]"];
        },
    ];
}
