import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type FunctionalArrayUnion = FunctionalArrayUnion.Union[];
export namespace FunctionalArrayUnion {
    export const PRIMITIVE = false;
    export const JSONABLE = false;

    export type Union = Array<() => any> | number[] | string[] | null[];
    export function generate(): FunctionalArrayUnion {
        return [
            TestRandomGenerator.array(() => console.log),
            TestRandomGenerator.array(() => 1),
            TestRandomGenerator.array(() => "two"),
            TestRandomGenerator.array(() => null),
        ];
    }

    export const SPOILERS: Spoiler<FunctionalArrayUnion>[] = [
        (input) => {
            input[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = {} as any;
            return ["$input[0]"];
        },
    ];

    export const BINARABLE = false;
}
