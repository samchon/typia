import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";
import typia from "typia";

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
import { ValidateBenchmarker } from "../internal/ValidateBenchmarker";
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
const validateTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) =>
        [...program.Errors(input)];

const prepare = ValidateBenchmarker.prepare(["typia", "typebox"]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const validateEquals = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            typia: typia.createValidateEquals<ObjectSimple>(),
            typebox: validateTypeBox(TypeBoxObjectSimpleEquals),
        },
        ObjectSimple.SPOILERS,
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            typia: typia.createValidateEquals<ObjectHierarchical>(),

            typebox: validateTypeBox(TypeBoxObjectHierarchicalEquals),
        },
        ObjectHierarchical.SPOILERS,
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            typia: typia.createValidateEquals<ObjectRecursive>(),

            typebox: validateTypeBox(TypeBoxObjectRecursiveEquals),
        },
        ObjectRecursive.SPOILERS,
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            typia: typia.createValidateEquals<ObjectUnionExplicit>(),

            typebox: validateTypeBox(TypeBoxObjectUnionExplicitEquals),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            typia: typia.createValidateEquals<ObjectUnionImplicit>(),

            typebox: validateTypeBox(TypeBoxObjectUnionImplicitEquals),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            typia: typia.createValidateEquals<ArrayRecursive>(),

            typebox: validateTypeBox(TypeBoxArrayRecursiveEquals),
        },
        ArrayRecursive.SPOILERS,
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            typia: typia.createValidateEquals<ArrayRecursiveUnionExplicit>(),

            typebox: validateTypeBox(TypeBoxArrayRecursiveUnionExplicitEquals),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            typia: typia.createValidateEquals<ArrayRecursiveUnionImplicit>(),

            typebox: validateTypeBox(TypeBoxArrayRecursiveUnionImplicitEquals),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            typia: typia.createValidateEquals<UltimateUnion>(),

            typebox: validateTypeBox(TypeBoxUltimateUnionEquals),
        },
        UltimateUnion.SPOILERS,
    ),
];
export { validateEquals as benchmark_validate_equals };
