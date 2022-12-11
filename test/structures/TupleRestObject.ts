import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type TupleRestObject = [boolean, number, ...TupleRestObject.IObject[]];
export namespace TupleRestObject {
    export interface IObject {
        value: string;
    }

    export function generate(): TupleRestObject {
        return [
            false,
            1,
            ...new Array(3).fill("").map(() => ({
                value: RandomGenerator.string(),
            })),
        ];
    }

    export const SPOILERS: Spoiler<TupleRestObject>[] = [
        (input) => {
            input[0] = null as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = "number" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = 0 as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3] = false as any;
            return ["$input[3]"];
        },
        (input) => {
            input[4] = { value: undefined! } as any;
            return ["$input[4].value"];
        },
    ];
}
