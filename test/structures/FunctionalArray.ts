import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type FunctionalArray = Array<(...args: any[]) => any>;
export namespace FunctionalArray {
    export const PRIMITIVE = false;

    export function generate(): FunctionalArray {
        return RandomGenerator.array(() => console.log);
    }

    export const SPOILERS: Spoiler<FunctionalArray>[] = [
        (input) => {
            input[0] = null!;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = "string" as any;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = {} as any;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = [] as any;
            return ["$input[0]"];
        },
    ];
}
