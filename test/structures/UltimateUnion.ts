import TSON, { IJsonApplication } from "../../src";
import { ArrayRecursiveUnionExplicit } from "./ArrayRecursiveUnionExplicit";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";

export type UltimateUnion = IJsonApplication[];
export namespace UltimateUnion {
    export function generate(): UltimateUnion {
        return [
            TSON.application<[ObjectUnionExplicit], "ajv">(),
            TSON.application<[ObjectUnionImplicit], "ajv">(),
            TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ];
    }
}
