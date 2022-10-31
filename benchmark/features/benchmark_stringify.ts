import ajv from "fast-json-stringify";

import TSON from "../../src";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { StringifyBenchmarker } from "../internal/StringifyBenchmarker";

function build<T>(app: TSON.IJsonApplication): null | ((input: T) => string) {
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

const stringify = () => [
    //----
    // OBJECT
    //----
    StringifyBenchmarker.prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ObjectSimple>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ObjectSimple>(),
            "TSON.isStringify()": TSON.createIsStringify<ObjectSimple>(),
            "fast-json-stringify": build(
                TSON.application<[ObjectSimple], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ObjectHierarchical>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ObjectHierarchical>(),
            "TSON.isStringify()": TSON.createIsStringify<ObjectHierarchical>(),
            "fast-json-stringify": build(
                TSON.application<[ObjectHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ObjectRecursive>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ObjectRecursive>(),
            "TSON.isStringify()": TSON.createIsStringify<ObjectRecursive>(),
            "fast-json-stringify": build(
                TSON.application<[ObjectRecursive], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (union)",
        () => ObjectUnionImplicit.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ObjectUnionImplicit>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ObjectUnionImplicit>(),
            "TSON.isStringify()": TSON.createIsStringify<ObjectUnionImplicit>(),
            "fast-json-stringify": build(
                TSON.application<[ObjectUnionImplicit], "ajv">(),
            ),
        },
    ),

    //----
    // ARRAY
    //----
    StringifyBenchmarker.prepare(
        "array (hierarchical)",
        () => ArrayHierarchical.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ArrayHierarchical>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ArrayHierarchical>(),
            "TSON.isStringify()": TSON.createIsStringify<ArrayHierarchical>(),
            "fast-json-stringify": build(
                TSON.application<[ArrayHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "TSON.stringify()": TSON.createStringify<ArrayRecursive>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ArrayRecursive>(),
            "TSON.isStringify()": TSON.createIsStringify<ArrayRecursive>(),
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursive], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (union)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "TSON.stringify()":
                TSON.createStringify<ArrayRecursiveUnionExplicit>(),
            "TSON.assertStringify()":
                TSON.createAssertStringify<ArrayRecursiveUnionExplicit>(),
            "TSON.isStringify()":
                TSON.createIsStringify<ArrayRecursiveUnionExplicit>(),
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
            ),
        },
    ),
];
export { stringify as benchmark_stringify };
