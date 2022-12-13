import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import typia from "../../src";
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

const prepare = IsBenchmarker.prepare(["typia", "typebox"]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const equals = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            typia: typia.createEquals<ObjectSimple>(),
            typebox: equalsTypeBox(TypeBoxObjectSimpleEquals),
        },
        [],
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            typia: typia.createEquals<ObjectHierarchical>(),
            typebox: equalsTypeBox(TypeBoxObjectHierarchicalEquals),
        },
        [],
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            typia: typia.createEquals<ObjectRecursive>(),
            typebox: equalsTypeBox(TypeBoxObjectRecursiveEquals),
        },
        [],
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            typia: typia.createEquals<ObjectUnionExplicit>(),
            typebox: equalsTypeBox(TypeBoxObjectUnionExplicitEquals),
        },
        [],
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            typia: typia.createEquals<ObjectUnionImplicit>(),
            typebox: equalsTypeBox(TypeBoxObjectUnionImplicitEquals),
        },
        [],
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            typia: typia.createEquals<ArrayRecursive>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveEquals),
        },
        [],
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            typia: typia.createEquals<ArrayRecursiveUnionExplicit>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveUnionExplicitEquals),
        },
        [],
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            typia: typia.createEquals<ArrayRecursiveUnionImplicit>(),
            typebox: equalsTypeBox(TypeBoxArrayRecursiveUnionImplicitEquals),
        },
        [],
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            typia: typia.createEquals<UltimateUnion>(),
            typebox: equalsTypeBox(TypeBoxUltimateUnionEquals),
        },
        [],
    ),
];
export { equals as benchmark_equals };
