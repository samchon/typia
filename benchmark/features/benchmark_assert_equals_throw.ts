import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

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
import { AssertThrowBenchmarker } from "../internal/AssertThrowBenchmarker";
// TYPEBOX TYPES
import { __TypeBoxArrayRecursiveEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveEquals";
import { __TypeBoxArrayRecursiveUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionExplicitEquals";
import { __TypeBoxArrayRecursiveUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxArrayRecursiveUnionImplicitEquals";
import { __TypeBoxObjectHierarchicalEquals } from "../structures/typebox/equals/TypeBoxObjectHierarchicalEquals";
import { __TypeBoxObjectRecursiveEquals } from "../structures/typebox/equals/TypeBoxObjectRecursiveEquals";
import { __TypeBoxObjectSimpleEquals } from "../structures/typebox/equals/TypeBoxObjectSimpleEquals";
import { __TypeBoxObjectUnionExplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionExplicitEquals";
import { __TypeBoxObjectUnionImplicitEquals } from "../structures/typebox/equals/TypeBoxObjectUnionImplicitEquals";
import { __TypeBoxUltimateUnionEquals } from "../structures/typebox/equals/TypeBoxUltimateUnionEquals";

/* -----------------------------------------------------------
    PREPARE ASSETS
----------------------------------------------------------- */
class CustomError extends Error {
    public constructor(public readonly instance: object) {
        super();

        const proto = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
        else (this as any).__proto__ = proto;
    }
}

const assertTypeBox = <S extends TSchema>(schema: S) => {
    const program = TypeCompiler.Compile(Type.Array(schema)); // only compile once
    return <T>(input: T[]) => {
        if (program.Check(input)) return input;
        throw new CustomError(program.Errors(input).next().value); // throw implies first error
    };
};

const prepare = AssertThrowBenchmarker.prepare(["typescript-json", "typebox"]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assertEquals_po_throw_pc = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        () => ObjectSimple.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ObjectSimple[]>(),
            typebox: assertTypeBox(__TypeBoxObjectSimpleEquals),
        },
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        () => ObjectHierarchical.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ObjectHierarchical[]>(),
            typebox: assertTypeBox(__TypeBoxObjectHierarchicalEquals),
        },
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        () => ObjectRecursive.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ObjectRecursive[]>(),
            typebox: assertTypeBox(__TypeBoxObjectRecursiveEquals),
        },
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        () => ObjectUnionExplicit.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ObjectUnionExplicit[]>(),
            typebox: assertTypeBox(__TypeBoxObjectUnionExplicitEquals),
        },
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        () => ObjectUnionImplicit.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ObjectUnionImplicit[]>(),
            typebox: assertTypeBox(__TypeBoxObjectUnionImplicitEquals),
        },
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        () => ArrayRecursive.trail(),
        {
            "typescript-json": TSON.createAssertEquals<ArrayRecursive[]>(),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveEquals),
        },
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        () => ArrayRecursiveUnionExplicit.trail(),
        {
            "typescript-json":
                TSON.createAssertEquals<ArrayRecursiveUnionExplicit[]>(),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionExplicitEquals),
        },
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        () => ArrayRecursiveUnionImplicit.trail(),
        {
            "typescript-json":
                TSON.createAssertEquals<ArrayRecursiveUnionImplicit[]>(),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionImplicitEquals),
        },
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        () => UltimateUnion.trail(),
        {
            "typescript-json": TSON.createAssertEquals<UltimateUnion[]>(),
            typebox: assertTypeBox(__TypeBoxUltimateUnionEquals),
        },
    ),
];
export { assertEquals_po_throw_pc as benchmark_assert_equals_throw };
