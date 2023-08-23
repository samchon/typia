import { ObjectSimple } from "./ObjectSimple";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";

export type InstanceUnion = InstanceUnion.Union[];
export namespace InstanceUnion {
    export type Union =
        | number
        | Uint8Array
        | Set<boolean>
        | Map<any, any>
        | [string, string]
        | [boolean, number, number]
        | number[]
        | boolean[]
        | []
        | ObjectSimple
        | ObjectUnionExplicit;

    export function generate(): InstanceUnion {
        return [
            3,
            new Uint8Array(),
            new Set([false, true]),
            new Map(),
            ["one", "two"],
            [false, 1, 2],
            [1, 2, 3],
            [true, false],
            [],
            ObjectSimple.generate(),
            ObjectUnionExplicit.generate(),
        ];
    }

    export const ADDABLE = false;
    export const BINARABLE = false;
    export const JSONABLE = false;
}
