import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { ObjectHierarchical } from "./ObjectHierarchical";
import { ObjectSimple } from "./ObjectSimple";

export type ArrayRepeatedUnionWithTuple =
    | boolean
    | number
    | string[]
    | ArrayRepeatedUnionWithTuple[]
    | ObjectSimple[]
    | [string, number, boolean]
    | [ObjectSimple, ObjectHierarchical];
export namespace ArrayRepeatedUnionWithTuple {
    export function generate(): ArrayRepeatedUnionWithTuple {
        const random = typia.createRandom<ArrayRepeatedUnionWithTuple>();
        return [
            false,
            1,
            ["two", "three", "four"],
            [true, 2, ["three", "four", "five"], [ObjectSimple.generate()]],
            [ObjectSimple.generate()],
            ["three", 2, true],
            [[[ObjectSimple.generate(), ObjectHierarchical.generate()]]],
            ...new Array(100).fill("").map(random),
        ];
    }

    export const ADDABLE: boolean = false;
    export const SPOILERS: Spoiler<ArrayRepeatedUnionWithTuple>[] = [
        (input) => {
            (input as any)[0] = undefined!;
            return ["$input[0]"];
        },
        (input) => {
            (input as any)[1] = null!;
            return ["$input[1]"];
        },
        (input) => {
            (input as any)[2][2] = 1;
            return ["$input[2][2]"];
        },
        (input) => {
            (input as any)[3][3][0] = ObjectHierarchical.generate();
            return ["$input[3][2][0].scale"];
        },
        (input) => {
            (input as any)[4][0].pivot = null;
            return ["$input[4][0].pivot"];
        },
        (input) => {
            (input as any)[5][2] = 1;
            return ["$input[5][2]"];
        },
        (input) => {
            (input as any)[6][0][0][0] = ObjectHierarchical;
            return ["$input[6][0][0][0]"];
        },
    ];
}
