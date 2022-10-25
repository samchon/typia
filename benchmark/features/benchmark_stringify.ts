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
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ObjectSimple], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ObjectHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ObjectRecursive], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (union)",
        () => ObjectUnionImplicit.generate(),
        {
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
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
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ArrayHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursive], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (union)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "TSON.stringify()": (input) => TSON.stringify(input),
            "TSON.assertStringify()": (input) => TSON.assertStringify(input),
            "TSON.isStringify()": (input) => TSON.isStringify(input)!,
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
            ),
        },
    ),
];
export { stringify as benchmark_stringify };
