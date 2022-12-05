import { Spoiler } from "../internal/Spoiler";

export type FunctionalValueUnion = FunctionalValueUnion.Union[];
export namespace FunctionalValueUnion {
    export const PRIMITIVE = false;

    export type Union = (() => any) | number | string | null;
    export function generate(): FunctionalValueUnion {
        return [console.log, 1, "two", null];
    }

    export const SPOILERS: Spoiler<FunctionalValueUnion>[] = [
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
