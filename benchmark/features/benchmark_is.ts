import TSON from "../../src";
import * as Similar from "typescript-is";
import Ajv from "ajv";

import { IsBenchmarker } from "../internal/IsBenchmarker";

import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";

function byAjv<T>(
    data: T,
    app: TSON.IJsonApplication,
): null | ((input: T) => any) {
    try {
        (app.schemas[0] as any).$id = "main";
        const ajv = new Ajv({
            schemas: [app.schemas[0], ...Object.values(app.components.schemas)],
        });
        const functor = ajv.getSchema("main") || null;
        if (functor === null || functor(data) === false) return null;

        if (Array.isArray(data))
            data.push({ fsaddsfasdf: "ASDfasdfsd" } as any);
        else if (typeof data === "object")
            (data as any)[Object.keys(data)[0]!] = { sdafasdf: "ASfsadf" };
        return functor(data) === true ? null : functor;
    } catch {
        return null;
    }
}

const is = () => [
    IsBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "typescript-is": (input) => Similar.is<typeof input>(input),
            ajv: byAjv(
                ObjectHierarchical.generate(),
                TSON.application<[ObjectHierarchical], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "typescript-is": (input) => Similar.is<typeof input>(input),
            ajv: byAjv(
                ObjectRecursive.generate(),
                TSON.application<[ObjectRecursive], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            // "typescript-is": (input) => Similar.is<typeof input>(input),
            "typescript-is": null,
            ajv: byAjv(
                ObjectUnionExplicit.generate(),
                TSON.application<[ObjectUnionExplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            // "typescript-is": (input) => Similar.is<typeof input>(input),
            "typescript-is": null,
            ajv: byAjv(
                ObjectUnionImplicit.generate(),
                TSON.application<[ObjectUnionImplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "typescript-is": (input) => Similar.is<typeof input>(input),
            ajv: byAjv(
                ArrayRecursive.generate(),
                TSON.application<[ArrayRecursive], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "typescript-is": (input) => Similar.is<typeof input>(input),
            ajv: byAjv(
                ArrayRecursiveUnionExplicit.generate(),
                TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "typescript-is": (input) => Similar.is<typeof input>(input),
            ajv: byAjv(
                ArrayRecursiveUnionImplicit.generate(),
                TSON.application<[ArrayRecursiveUnionImplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare("ultimate union", () => UltimateUnion.generate(), {
        "typescript-json": (input) => TSON.is(input),
        "typescript-is": (input) => Similar.is<typeof input>(input),
        ajv: byAjv(
            UltimateUnion.generate(),
            TSON.application<[UltimateUnion], "ajv">(),
        ),
    }),
];
export { is as benchmark_is };
