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
            "fast-json-stringify": () =>
                build(TSON.application<[ObjectSimple], "ajv">()),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ObjectHierarchical], "ajv">()),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ObjectRecursive], "ajv">()),
        },
    ),

    // SPECIAL UNION TYPES
    OptimizerBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ObjectUnionImplicit], "ajv">()),
        },
    ),
    OptimizerBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ObjectUnionExplicit], "ajv">()),
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
            "fast-json-stringify": () =>
                build(TSON.application<[ArrayHierarchical], "ajv">()),
        },
    ),
    OptimizerBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ArrayRecursive], "ajv">()),
        },
    ),
    // SPECIAL UNION STRUCTURES
    OptimizerBenchmarker.prepare(
        "array (recursive, union)",
        () => ArrayRecursiveUnion.generate(),
        {
            "typescript-json": () => (input) => TSON.stringify(input),
            "fast-json-stringify": () =>
                build(TSON.application<[ArrayRecursiveUnion], "ajv">()),
        },
    ),
];
export { optimizer as benchmark_optimizer };
