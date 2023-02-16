import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";
import * as tr from "class-transformer";
import { ClassConstructor } from "class-transformer";
import * as cv from "class-validator";
import * as t from "io-ts";
import "reflect-metadata";
import typia from "typia";
import { z } from "zod";

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
import { AssertIterateBenchmarker } from "../internal/AssertIterateBenchmarker";
// CLASS-VALIDATOR
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArrayRecursiveUnionImplicit } from "../structures/class-validator/CvArrayRecursiveUnionImplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectRecursive } from "../structures/class-validator/CvObjectRecursive";
import { CvObjectSimple } from "../structures/class-validator/CvObjectSimple";
import { CvObjectUnionExplicit } from "../structures/class-validator/CvObjectUnionExplicit";
import { CvObjectUnionImplicit } from "../structures/class-validator/CvObjectUnionImplicit";
// IO-TS TYPES
import { IoTsArrayRecursive } from "../structures/io-ts/IoTsArrayRecursive";
import { IoTsArrayRecursiveUnionExplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionExplicit";
import { IoTsArrayRecursiveUnionImplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionImplicit";
import { IoTsObjectHierarchical } from "../structures/io-ts/IoTsObjectHierarchical";
import { IoTsObjectRecursive } from "../structures/io-ts/IoTsObjectRecursive";
import { IoTsObjectSimple } from "../structures/io-ts/IoTsObjectSimple";
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
import { IoTsUltimateUnion } from "../structures/io-ts/IoTsUltimateUnion";
import { IoTsUtils } from "../structures/io-ts/IoTsUtils";
// TYPEBOX TYPES
import { TypeBoxArrayRecursive } from "../structures/typebox/TypeBoxArrayRecursive";
import { TypeBoxArrayRecursiveUnionExplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { TypeBoxArrayRecursiveUnionImplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { TypeBoxObjectHierarchical } from "../structures/typebox/TypeBoxObjectHierarchical";
import { TypeBoxObjectRecursive } from "../structures/typebox/TypeBoxObjectRecursive";
import { TypeBoxObjectSimple } from "../structures/typebox/TypeBoxObjectSimple";
import { TypeBoxObjectUnionExplicit } from "../structures/typebox/TypeBoxObjectUnionExplicit";
import { TypeBoxObjectUnionImplicit } from "../structures/typebox/TypeBoxObjectUnionImplicit";
import { TypeBoxUltimateUnion } from "../structures/typebox/TypeBoxUltimateUnion";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
import { ZodObjectRecursive } from "../structures/zod/ZodObjectRecursive";
import { ZodObjectSimple } from "../structures/zod/ZodObjectSimple";
import { ZodObjectUnionExplicit } from "../structures/zod/ZodObjectUnionExplicit";
import { ZodObjectUnionImplicit } from "../structures/zod/ZodObjectUnionImplicit";
import { ZodUltimateUnion } from "../structures/zod/ZodUltimateUnion";

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

const assertTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) => {
        const value = program.Errors(input).next().value;
        if (value) throw new CustomError(value);
        return input;
    };
const assertIoTs =
    <S extends t.Mixed>(type: S) =>
    <T>(input: T) => {
        const validation = type.decode(input);
        const paths: string[] = IoTsUtils.getPaths(validation);

        if (paths.length) throw new CustomError(paths);
        return input;
    };
const assertZod =
    <S extends z.ZodTypeAny>(type: S) =>
    <T>(input: T) => {
        const res = type.safeParse(input);
        if (res.success) return input;
        throw new CustomError(res.error);
    };
const assertClassValidator =
    <S extends object>(schema: ClassConstructor<S>) =>
    <T>(input: T) => {
        const result = cv.validateSync(tr.plainToInstance(schema, input));
        if (result.length) throw new CustomError(result);
        return input;
    };

const prepare = AssertIterateBenchmarker.prepare([
    "typia",
    "typebox",
    "io-ts",
    "zod",
    "class-validator",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assert_po_iterate_pc = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            typia: typia.createAssert<ObjectSimple>(),
            typebox: assertTypeBox(TypeBoxObjectSimple),
            "io-ts": assertIoTs(IoTsObjectSimple),
            zod: assertZod(ZodObjectSimple),
            "class-validator": assertClassValidator(CvObjectSimple),
        },
        ObjectSimple.SPOILERS,
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            typia: typia.createAssert<ObjectHierarchical>(),
            "io-ts": assertIoTs(IoTsObjectHierarchical),
            "class-validator": assertClassValidator(CvObjectHierarchical),
            zod: assertZod(ZodObjectHierarchical),
            typebox: assertTypeBox(TypeBoxObjectHierarchical),
        },
        ObjectHierarchical.SPOILERS,
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            typia: typia.createAssert<ObjectRecursive>(),
            "io-ts": assertIoTs(IoTsObjectRecursive),
            "class-validator": assertClassValidator(CvObjectRecursive),
            zod: assertZod(ZodObjectRecursive),
            typebox: assertTypeBox(TypeBoxObjectRecursive),
        },
        ObjectRecursive.SPOILERS,
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            typia: typia.createAssert<ObjectUnionExplicit>(),
            "io-ts": assertIoTs(IoTsObjectUnionExplicit),
            "class-validator": assertClassValidator(CvObjectUnionExplicit),
            zod: assertZod(ZodObjectUnionExplicit),
            typebox: assertTypeBox(TypeBoxObjectUnionExplicit),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            typia: typia.createAssert<ObjectUnionImplicit>(),
            "io-ts": assertIoTs(IoTsObjectUnionImplicit),
            "class-validator": assertClassValidator(CvObjectUnionImplicit),
            zod: assertZod(ZodObjectUnionImplicit),
            typebox: assertTypeBox(TypeBoxObjectUnionImplicit),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            typia: typia.createAssert<ArrayRecursive>(),
            "io-ts": assertIoTs(IoTsArrayRecursive),
            "class-validator": assertClassValidator(CvArrayRecursive),
            zod: assertZod(ZodArrayRecursive),
            typebox: assertTypeBox(TypeBoxArrayRecursive),
        },
        ArrayRecursive.SPOILERS,
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            typia: typia.createAssert<ArrayRecursiveUnionExplicit>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionExplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionExplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionExplicit),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionExplicit),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            typia: typia.createAssert<ArrayRecursiveUnionImplicit>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionImplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionImplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionImplicit),
            typebox: assertTypeBox(TypeBoxArrayRecursiveUnionImplicit),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            typia: typia.createAssert<UltimateUnion>(),
            "io-ts": assertIoTs(IoTsUltimateUnion),
            "class-validator": null,
            zod: assertZod(ZodUltimateUnion),
            typebox: assertTypeBox(TypeBoxUltimateUnion),
        },
        UltimateUnion.SPOILERS,
    ),
];
export { assert_po_iterate_pc as benchmark_assert_iterate };
