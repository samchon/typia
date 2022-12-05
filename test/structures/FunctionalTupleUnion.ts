import { Spoiler } from "../internal/Spoiler";

export type FunctionalTupleUnion = [
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
    FunctionalTupleUnion.Union,
];
export namespace FunctionalTupleUnion {
    export const PRIMITIVE = false;

    export type Union = ((...args: any[]) => any) | number | string | null;
    export function generate(): FunctionalTupleUnion {
        return [console.log, 1, "two", null];
    }

    export const SPOILERS: Spoiler<FunctionalTupleUnion>[] = [
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
