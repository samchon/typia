import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { IsBenchmarker } from "../internal/IsBenchmarker";
// TYPEBOX TYPES
import { TypeBoxArrayRecursiveEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveEquals";
import { TypeBoxArrayRecursiveUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionExplicitEquals";
import { TypeBoxArrayRecursiveUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionImplicitEquals";
import { TypeBoxObjectHierarchicalEquals } from "../structures/typebox/equals/TypeBoxObjectHierarchicalEquals";
import { TypeBoxObjectRecursiveEquals } from "../structures/typebox/equals/TypeBoxObjectRecursiveEquals";
import { TypeBoxObjectSimpleEquals } from "../structures/typebox/equals/TypeBoxObjectSimpleEquals";
import { TypeBoxObjectUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionExplicitEquals";
import { TypeBoxObjectUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionImplicitEquals";
import { TypeBoxUltimateUnionEquals } from "../structures/typebox/equals/TypeBoxUltimateUnionEquals";

/* -----------------------------------------------------------
    PREPARE ASSETS
----------------------------------------------------------- */
const equalsTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) =>
        program.Check(input);

const prepare = IsBenchmarker.prepare(["typescript-json", "typebox"]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const equals = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            "typescript-json": TSON.createEquals<ObjectSimple>(),
            typebox: equalsTypeBox(TypeBoxObjectSimpleEquals),
        },
        [],
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": TSON.createEquals<ObjectHierarchical>(),
            typebox: equalsTypeBox(TypeBoxObjectHierarchicalEquals),
        },
        [],
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": TSON.createEquals<ObjectRecursive>(),
            typebox: equalsTypeBox(TypeBoxObjectRecursiveEquals),
        },
        [],
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": TSON.createEquals<ObjectUnionExplicit>(),
            typebox: equalsTypeBox(TypeBoxObjectUnionExplicitEquals),
        },
        [],
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": TSON.createEquals<ObjectUnionImplicit>(),
            typebox: equalsTypeBox(TypeBoxObjectUnionImplicitEquals),
        },
        [],
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": TSON.createEquals<ArrayRecursive>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveEquals),
        },
        [],
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": TSON.createEquals<ArrayRecursiveUnionExplicit>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveUnionExplicitEquals),
        },
        [],
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": TSON.createEquals<ArrayRecursiveUnionImplicit>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveUnionImplicitEquals),
        },
        [],
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": TSON.createEquals<UltimateUnion>(),
            typebox: equalsTypeBox(TypeBoxUltimateUnionEquals),
        },
        [],
    ),
];
export { equals as benchmark_equals };
