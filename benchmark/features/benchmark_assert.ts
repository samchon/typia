import TSON from "../../src";
import * as Similar from "typescript-is";

import { CheckerBenchmarker } from "../internal/CheckerBenchmarker";

import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
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
        "object (union)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    CheckerBenchmarker.prepare(
        "array (union)",
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
