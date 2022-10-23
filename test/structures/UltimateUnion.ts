import TSON, { IJsonApplication } from "../../src";
import { ArrayRecursiveUnionExplicit } from "./ArrayRecursiveUnionExplicit";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";

export type UltimateUnion = IJsonApplication[];
export namespace UltimateUnion {
    export function generate(): UltimateUnion {
        const output = [
            TSON.application<[ObjectUnionExplicit], "ajv">(),
            TSON.application<[ObjectUnionImplicit], "ajv">(),
            TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ];
        output[0].schemas[0] = {
            type: "number",
            nullable: false,
            enum: undefined,
        };
        return output;
    }
}
