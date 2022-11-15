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

const prepare = StringifyBenchmarker.prepare([
    "TSON.stringify()",
    "TSON.assertStringify()",
    "TSON.isStringify()",
    "fast-json-stringify",
    "JSON.stringify",
]);

const stringify = () => [
    //----
    // OBJECT
    //----
    prepare("object (simple)", () => ObjectSimple.generate(), {
        "TSON.stringify()": TSON.createStringify<ObjectSimple>(),
        "TSON.assertStringify()": TSON.createAssertStringify<ObjectSimple>(),
        "TSON.isStringify()": TSON.createIsStringify<ObjectSimple>(),
        "fast-json-stringify": build(TSON.application<[ObjectSimple], "ajv">()),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        "TSON.stringify()": TSON.createStringify<ObjectHierarchical>(),
        "TSON.assertStringify()":
            TSON.createAssertStringify<ObjectHierarchical>(),
        "TSON.isStringify()": TSON.createIsStringify<ObjectHierarchical>(),
        "fast-json-stringify": build(
            TSON.application<[ObjectHierarchical], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        "TSON.stringify()": TSON.createStringify<ObjectRecursive>(),
        "TSON.assertStringify()": TSON.createAssertStringify<ObjectRecursive>(),
        "TSON.isStringify()": TSON.createIsStringify<ObjectRecursive>(),
        "fast-json-stringify": build(
            TSON.application<[ObjectRecursive], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (union)", () => ObjectUnionImplicit.generate(), {
        "TSON.stringify()": TSON.createStringify<ObjectUnionImplicit>(),
        "TSON.assertStringify()":
            TSON.createAssertStringify<ObjectUnionImplicit>(),
        "TSON.isStringify()": TSON.createIsStringify<ObjectUnionImplicit>(),
        "fast-json-stringify": build(
            TSON.application<[ObjectUnionImplicit], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),

    //----
    // ARRAY
    //----
    prepare("array (hierarchical)", () => ArrayHierarchical.generate(), {
        "TSON.stringify()": TSON.createStringify<ArrayHierarchical>(),
        "TSON.assertStringify()":
            TSON.createAssertStringify<ArrayHierarchical>(),
        "TSON.isStringify()": TSON.createIsStringify<ArrayHierarchical>(),
        "fast-json-stringify": build(
            TSON.application<[ArrayHierarchical], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        "TSON.stringify()": TSON.createStringify<ArrayRecursive>(),
        "TSON.assertStringify()": TSON.createAssertStringify<ArrayRecursive>(),
        "TSON.isStringify()": TSON.createIsStringify<ArrayRecursive>(),
        "fast-json-stringify": build(
            TSON.application<[ArrayRecursive], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (union)", () => ArrayRecursiveUnionExplicit.generate(), {
        "TSON.stringify()": TSON.createStringify<ArrayRecursiveUnionExplicit>(),
        "TSON.assertStringify()":
            TSON.createAssertStringify<ArrayRecursiveUnionExplicit>(),
        "TSON.isStringify()":
            TSON.createIsStringify<ArrayRecursiveUnionExplicit>(),
        "fast-json-stringify": build(
            TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ),
        "JSON.stringify": JSON.stringify,
    }),
];
export { stringify as benchmark_stringify };
