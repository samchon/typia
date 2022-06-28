import TSON, { IJsonApplication } from "../../src";

import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";
import { ArrayRecursiveUnion } from "./ArrayRecursiveUnion";

export type UltimateUnion = IJsonApplication[];
export namespace UltimateUnion {
    export function generate(): UltimateUnion {
        return [
            TSON.application<[ObjectUnionExplicit], "ajv">(),
            TSON.application<[ObjectUnionImplicit], "ajv">(),
            TSON.application<[ArrayRecursiveUnion], "ajv">(),
        ];
    }
}
