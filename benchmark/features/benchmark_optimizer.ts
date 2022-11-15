import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import Ajv from "ajv";

import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
import { OptimizerBenchmarker } from "../internal/OptimizerBenchmarker";
// TYPEBOX TYPES
import { __TypeBoxArrayRecursive } from "../structures/typebox/TypeBoxArrayRecursive";
import { __TypeBoxArrayRecursiveUnionExplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { __TypeBoxArrayRecursiveUnionImplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { __TypeBoxObjectHierarchical } from "../structures/typebox/TypeBoxObjectHierarchical";
import { __TypeBoxObjectRecursive } from "../structures/typebox/TypeBoxObjectRecursive";
import { __TypeBoxObjectUnionExplicit } from "../structures/typebox/TypeBoxObjectUnionExplicit";
import { __TypeBoxObjectUnionImplicit } from "../structures/typebox/TypeBoxObjectUnionImplicit";
import { __TypeBoxUltimateUnion } from "../structures/typebox/TypeBoxUltimateUnion";

function buildAjv(app: TSON.IJsonApplication): any {
    try {
        (app.schemas[0] as any).$id = "main";
        const ajv = new Ajv({
            schemas: [app.schemas[0], ...Object.values(app.components.schemas)],
        });
        return ajv.getSchema("main") || null;
    } catch {
        return null;
    }
}

const buildTypebox = (schema: TSchema) => (input: any) =>
    TypeCompiler.Compile(schema).Check(input);

const prepare = OptimizerBenchmarker.prepare([
    "typescript-json",
    "typebox",
    "ajv",
]);

const optimizer = () => [
    //----
    // OBJECT
    //----
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ObjectHierarchical], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxObjectHierarchical),
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ObjectRecursive], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxObjectRecursive),
    }),
    // SPECIAL UNION TYPES
    prepare("object (union)", () => ObjectUnionImplicit.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ObjectUnionImplicit], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxObjectUnionImplicit),
    }),

    //----
    // ARRAY
    //----
    // NORMAL STRUCTURES
    prepare("array (hierarchical)", () => ArrayHierarchical.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ArrayHierarchical], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxArrayRecursive),
    }),
    // RECURSIVE STRUCTURE
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ArrayRecursive], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxArrayRecursive),
    }),
    // SPECIAL UNION STRUCTURES
    prepare("array (union)", () => ArrayRecursiveUnionExplicit.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[ArrayRecursiveUnionExplicit], "ajv">())(
                input,
            ),
        typebox: () => buildTypebox(__TypeBoxArrayRecursiveUnionExplicit),
    }),

    //----
    // ULTIMATE UNION
    //----
    prepare("ultimate union", () => UltimateUnion.generate(), {
        "typescript-json": () => (input) => TSON.is(input),
        ajv: () => (input) =>
            buildAjv(TSON.application<[UltimateUnion], "ajv">())(input),
        typebox: () => buildTypebox(__TypeBoxUltimateUnion),
    }),
];
export { optimizer as benchmark_optimizer };
