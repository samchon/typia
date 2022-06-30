import TSON from "../../src";
import * as Similar from "typescript-is";

import { CheckerBenchmarker } from "../internal/CheckerBenchmarker";

import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";

const assert = () => [
    CheckerBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": null,
        },
    ),
    CheckerBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare("array (simple)", () => ArraySimple.generate(), {
        "typescript-json": (input) => TSON.assertType(input),
        "typescript-is": (input) => Similar.assertType<typeof input>(input),
    }),
    CheckerBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "array (recursive, union)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
];
export { assert as benchmark_assert };
