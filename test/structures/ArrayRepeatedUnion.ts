import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { ObjectHierarchical } from "./ObjectHierarchical";
import { ObjectSimple } from "./ObjectSimple";

export type ArrayRepeatedUnion =
    | boolean
    | number
    | string[]
    | ArrayRepeatedUnion[]
    | ObjectSimple[];
export namespace ArrayRepeatedUnion {
    export function generate(): ArrayRepeatedUnion {
        const random = typia.createRandom<ArrayRepeatedUnion>();
        return [
            false,
            1,
            ["two", "three", "four"],
            [true, 2, ["three", "four", "five"], [ObjectSimple.generate()]],
            [ObjectSimple.generate()],
            ...new Array(100).fill("").map(random),
        ];
    }

    export const ADDABLE: boolean = false;
    export const SPOILERS: Spoiler<ArrayRepeatedUnion>[] = [
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
    ];
}
