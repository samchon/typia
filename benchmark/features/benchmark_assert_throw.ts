import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import * as tr from "class-transformer";
import { ClassConstructor } from "class-transformer";
import * as cv from "class-validator";
import * as t from "io-ts";
import typia from "typia";
import { z } from "zod";

// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { AssertThrowBenchmarker } from "../internal/AssertThrowBenchmarker";
// CLASS-VALIDATOR
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArrayRecursiveUnionImplicit } from "../structures/class-validator/CvArrayRecursiveUnionImplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectSimple } from "../structures/class-validator/CvObjectSimple";
import { CvObjectUnionExplicit } from "../structures/class-validator/CvObjectUnionExplicit";
import { CvObjectUnionImplicit } from "../structures/class-validator/CvObjectUnionImplicit";
// IO-TS TYPES
import { IoTsArrayRecursive } from "../structures/io-ts/IoTsArrayRecursive";
import { IoTsArrayRecursiveUnionExplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionExplicit";
import { IoTsArrayRecursiveUnionImplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionImplicit";
import { IoTsObjectHierarchical } from "../structures/io-ts/IoTsObjectHierarchical";
import { IoTsObjectSimple } from "../structures/io-ts/IoTsObjectSimple";
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
import { IoTsUltimateUnion } from "../structures/io-ts/IoTsUltimateUnion";
import { IoTsUtils } from "../structures/io-ts/IoTsUtils";
// TYPEBOX TYPES
import { __TypeBoxArrayRecursive } from "../structures/typebox/TypeBoxArrayRecursive";
import { __TypeBoxArrayRecursiveUnionExplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { __TypeBoxArrayRecursiveUnionImplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { __TypeBoxObjectHierarchical } from "../structures/typebox/TypeBoxObjectHierarchical";
import { __TypeBoxObjectSimple } from "../structures/typebox/TypeBoxObjectSimple";
import { __TypeBoxObjectUnionExplicit } from "../structures/typebox/TypeBoxObjectUnionExplicit";
import { __TypeBoxObjectUnionImplicit } from "../structures/typebox/TypeBoxObjectUnionImplicit";
import { __TypeBoxUltimateUnion } from "../structures/typebox/TypeBoxUltimateUnion";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
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

const assertTypeBox = <S extends TSchema>(schema: S) => {
    const program = TypeCompiler.Compile(Type.Array(schema));
    return <T>(input: T[]) => {
        if (program.Check(input)) return input;

        const iterator = program.Errors(input);
        throw new CustomError(iterator.next().value);
    };
};
const assertIoTs = <S extends t.Mixed>(type: S) => {
    const program = t.array(type);
    return <T>(input: T[]) => {
        const validation = program.decode(input);
        const paths: string[] = IoTsUtils.getPaths(validation);

        if (paths.length) throw new CustomError(paths);
        return input;
    };
};
const assertZod = <S extends z.ZodTypeAny>(type: S) => {
    const program = z.array(type);
    return <T>(input: T[]) => {
        const res = program.safeParse(input);
        if (res.success) return input;
        throw new CustomError(res.error);
    };
};
const assertClassValidator =
    <S extends object>(schema: ClassConstructor<S>) =>
    <T>(input: T[]) => {
        const errors: cv.ValidationError[] = [];
        for (const elem of input)
            errors.push(...cv.validateSync(tr.plainToInstance(schema, elem)));
        if (errors.length) throw new CustomError(errors);
        return input;
    };

const prepare = AssertThrowBenchmarker.prepare([
    "typia",
    "typebox",
    "io-ts",
    "zod",
    "class-validator",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assert_po_throw_pc = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        () => ObjectSimple.trail(),
        {
            typia: typia.createAssert<ObjectSimple[]>(),
            "io-ts": assertIoTs(IoTsObjectSimple),
            "class-validator": assertClassValidator(CvObjectSimple),
            zod: assertZod(ZodObjectSimple),
            typebox: assertTypeBox(__TypeBoxObjectSimple),
        },
        ObjectSimple.SPOILERS,
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        () => ObjectHierarchical.trail(),
        {
            typia: typia.createAssert<ObjectHierarchical[]>(),
            "io-ts": assertIoTs(IoTsObjectHierarchical),
            "class-validator": assertClassValidator(CvObjectHierarchical),
            zod: assertZod(ZodObjectHierarchical),
            typebox: assertTypeBox(__TypeBoxObjectHierarchical),
        },
        ObjectHierarchical.SPOILERS,
    ),
    prepare(
        "object (recursive)",
        () => ObjectUnionImplicit.generate(),
        () => ObjectUnionImplicit.trail(),
        {
            typia: typia.createAssert<ObjectUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionImplicit),
            "class-validator": assertClassValidator(CvObjectUnionImplicit),
            zod: assertZod(ZodObjectUnionImplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionImplicit),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        () => ObjectUnionExplicit.trail(),
        {
            typia: typia.createAssert<ObjectUnionExplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionExplicit),
            "class-validator": assertClassValidator(CvObjectUnionExplicit),
            zod: assertZod(ZodObjectUnionExplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionExplicit),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        () => ObjectUnionImplicit.trail(),
        {
            typia: typia.createAssert<ObjectUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionImplicit),
            "class-validator": assertClassValidator(CvObjectUnionImplicit),
            zod: assertZod(ZodObjectUnionImplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionImplicit),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        () => ArrayRecursive.trail(),
        {
            typia: typia.createAssert<ArrayRecursive[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursive),
            "class-validator": assertClassValidator(CvArrayRecursive),
            zod: assertZod(ZodArrayRecursive),
            typebox: assertTypeBox(__TypeBoxArrayRecursive),
        },
        ArrayRecursive.SPOILERS,
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        () => ArrayRecursiveUnionExplicit.trail(),
        {
            typia: typia.createAssert<ArrayRecursiveUnionExplicit[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionExplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionExplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionExplicit),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionExplicit),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        () => ArrayRecursiveUnionImplicit.trail(),
        {
            typia: typia.createAssert<ArrayRecursiveUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionImplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionImplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionImplicit),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionImplicit),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        () => UltimateUnion.trail(),
        {
            typia: typia.createAssert<UltimateUnion[]>(),
            "io-ts": assertIoTs(IoTsUltimateUnion),
            "class-validator": null,
            zod: assertZod(ZodUltimateUnion),
            typebox: assertTypeBox(__TypeBoxUltimateUnion),
        },
        UltimateUnion.SPOILERS,
    ),
];
export { assert_po_throw_pc as benchmark_assert_throw };
