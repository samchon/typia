import ajv from "fast-json-stringify";
import typia from "typia";

import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { StringifyBenchmarker } from "../internal/StringifyBenchmarker";

function build<T>(app: typia.IJsonApplication): null | ((input: T) => string) {
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

const prepare = StringifyBenchmarker.prepare([
    "typia.stringify()",
    "typia.assertStringify()",
    "typia.isStringify()",
    "fast-json-stringify",
    "JSON.stringify",
]);

const stringify = () => [
    //----
    // OBJECT
    //----
    prepare("object (simple)", () => ObjectSimple.generate(), {
        "typia.stringify()": typia.createStringify<ObjectSimple>(),
        "typia.assertStringify()": typia.createAssertStringify<ObjectSimple>(),
        "typia.isStringify()": typia.createIsStringify<ObjectSimple>(),
        "fast-json-stringify": build(
            typia.application<[ObjectSimple], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        "typia.stringify()": typia.createStringify<ObjectHierarchical>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectHierarchical>(),
        "typia.isStringify()": typia.createIsStringify<ObjectHierarchical>(),
        "fast-json-stringify": build(
            typia.application<[ObjectHierarchical], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        "typia.stringify()": typia.createStringify<ObjectRecursive>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectRecursive>(),
        "typia.isStringify()": typia.createIsStringify<ObjectRecursive>(),
        "fast-json-stringify": build(
            typia.application<[ObjectRecursive], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (union)", () => ObjectUnionImplicit.generate(), {
        "typia.stringify()": typia.createStringify<ObjectUnionImplicit>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectUnionImplicit>(),
        "typia.isStringify()": typia.createIsStringify<ObjectUnionImplicit>(),
        "fast-json-stringify": build(
            typia.application<[ObjectUnionImplicit], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),

    //----
    // ARRAY
    //----
    prepare("array (simple)", () => ArraySimple.generate(), {
        "typia.stringify()": typia.createStringify<ArraySimple>(),
        "typia.assertStringify()": typia.createAssertStringify<ArraySimple>(),
        "typia.isStringify()": typia.createIsStringify<ArraySimple>(),
        "fast-json-stringify": build(typia.application<[ArraySimple], "ajv">()),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (hierarchical)", () => ArrayHierarchical.generate(), {
        "typia.stringify()": typia.createStringify<ArrayHierarchical>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayHierarchical>(),
        "typia.isStringify()": typia.createIsStringify<ArrayHierarchical>(),
        "fast-json-stringify": build(
            typia.application<[ArrayHierarchical], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        "typia.stringify()": typia.createStringify<ArrayRecursive>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayRecursive>(),
        "typia.isStringify()": typia.createIsStringify<ArrayRecursive>(),
        "fast-json-stringify": build(
            typia.application<[ArrayRecursive], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (union)", () => ArrayRecursiveUnionExplicit.generate(), {
        "typia.stringify()":
            typia.createStringify<ArrayRecursiveUnionExplicit>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayRecursiveUnionExplicit>(),
        "typia.isStringify()":
            typia.createIsStringify<ArrayRecursiveUnionExplicit>(),
        "fast-json-stringify": build(
            typia.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
];
export { stringify as benchmark_stringify };
