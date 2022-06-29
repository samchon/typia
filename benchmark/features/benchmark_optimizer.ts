import ajv from "fast-json-stringify";
import TSON from "../../src";
import { OptimizerBenchmarker } from "../internal/OptimizerBenchmarker";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";

function build(app: TSON.IJsonApplication): any {
    try {
        return ajv(app.schemas[0] as any, {
            // mode: "standalone",
            schema: {
                components: app.components,
            } as any,
        }) as any;
    } catch {
        return null;
    }
}

const optimizer = () => [
    //----
    // OBJECT
    //----
    // NORMAL STRUCTURES
    OptimizerBenchmarker.prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ObjectSimple], "ajv">())(input),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ObjectHierarchical], "ajv">())(input),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ObjectRecursive], "ajv">())(input),
        },
    ),

    // SPECIAL UNION TYPES
    OptimizerBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ObjectUnionImplicit], "ajv">())(input),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ObjectUnionExplicit], "ajv">())(input),
        },
    ),

    //----
    // ARRAY
    //----
    // NORMAL STRUCTURES
    OptimizerBenchmarker.prepare(
        "array (hierarchical)",
        () => ArrayHierarchical.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ArrayHierarchical], "ajv">())(input),
        },
    ),
    OptimizerBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ArrayRecursive], "ajv">())(input),
        },
    ),
    // SPECIAL UNION STRUCTURES
    OptimizerBenchmarker.prepare(
        "array (recursive, union)",
        () => ArrayRecursiveUnion.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () => (input) =>
                build(TSON.application<[ArrayRecursiveUnion], "ajv">())(input),
        },
    ),
];
export { optimizer as benchmark_optimizer };
