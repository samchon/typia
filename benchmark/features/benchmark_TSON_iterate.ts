import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
import { TsonIterateBenchmarker } from "../internal/TsonIterateBenchmarker";

const TSON_iterate = () => [
    TsonIterateBenchmarker.prepare("simple", () => ObjectSimple.generate(), {
        is: (input) => TSON.is(input),
        assert: (input) => TSON.assertType(input),
        validate: (input) => TSON.validate(input),
    }),
    TsonIterateBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
    TsonIterateBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            is: (input) => TSON.is(input),
            assert: (input) => TSON.assertType(input),
            validate: (input) => TSON.validate(input),
        },
    ),
];
export { TSON_iterate as benchmark_TSON_iterate };
