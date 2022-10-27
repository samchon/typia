import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import * as tr from "class-transformer";
import { ClassConstructor } from "class-transformer";
import * as cv from "class-validator";
import * as t from "io-ts";
import "reflect-metadata";
import { z } from "zod";

import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { AssertBenchmarker } from "../internal/AssertBenchmarker";
// CLASS-VALIDATOR
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArrayRecursiveUnionImplicit } from "../structures/class-validator/CvArrayRecursiveUnionImplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectUnionExplicit } from "../structures/class-validator/CvObjectUnionExplicit";
import { CvObjectUnionImplicit } from "../structures/class-validator/CvObjectUnionImplicit";
// IO-TS TYPES
import { IoTsArrayRecursive } from "../structures/io-ts/IoTsArrayRecursive";
import { IoTsArrayRecursiveUnionExplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionExplicit";
import { IoTsArrayRecursiveUnionImplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionImplicit";
import { IoTsObjectHierarchical } from "../structures/io-ts/IoTsObjectHierarchical";
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
import { IoTsUltimateUnion } from "../structures/io-ts/IoTsUltimateUnion";
import { IoTsUtils } from "../structures/io-ts/IoTsUtils";
// TYPEBOX TYPES
import { __TypeBoxArrayRecursive } from "../structures/typebox/TypeBoxArrayRecursive";
import { __TypeBoxArrayRecursiveUnionExplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { __TypeBoxArrayRecursiveUnionImplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { __TypeBoxObjectHierarchical } from "../structures/typebox/TypeBoxObjectHierarchical";
import { __TypeBoxObjectUnionExplicit } from "../structures/typebox/TypeBoxObjectUnionExplicit";
import { __TypeBoxObjectUnionImplicit } from "../structures/typebox/TypeBoxObjectUnionImplicit";
import { __TypeBoxUltimateUnion } from "../structures/typebox/TypeBoxUltimateUnion";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
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
    <S extends TSchema>(schema: S) =>
    <T>(input: T[]) => {
        const program = TypeCompiler.Compile(Type.Array(schema));
        if (program.Check(input)) return input;

        const iterator = program.Errors(input);
        throw new CustomError(iterator.next().value);
    };
const assertIoTs =
    <S extends t.Mixed>(type: S) =>
    <T>(input: T[]) => {
        const validation = t.array(type).decode(input);
        const paths: string[] = IoTsUtils.getPaths(validation);

        if (paths.length) throw new CustomError(paths);
        return input;
    };
const assertZod =
    <S extends z.ZodTypeAny>(type: S) =>
    <T>(input: T[]) => {
        const res = z.array(type).safeParse(input);
        if (res.success) return input;
        throw new CustomError(res.error);
    };
const assertClassValidator =
    <S extends object>(schema: ClassConstructor<S>) =>
    <T>(input: T[]) => {
        const result = input.map((elem) =>
            cv.validateSync(tr.plainToInstance(schema, elem)),
        );
        if (result.length) throw new CustomError(result);
        return input;
    };

const prepare = AssertBenchmarker.prepare([
    "typescript-json",
    "typebox",
    "io-ts",
    "zod",
    "class-validator",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const assertType = () => [
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        () => ObjectHierarchical.trail(),
        {
            "typescript-json": TSON.createAssertType<ObjectHierarchical[]>(),
            "io-ts": assertIoTs(IoTsObjectHierarchical),
            "class-validator": assertClassValidator(CvObjectHierarchical),
            zod: assertZod(ZodObjectHierarchical),
            typebox: assertTypeBox(__TypeBoxObjectHierarchical),
        },
    ),
    prepare(
        "object (recursive)",
        () => ObjectUnionImplicit.generate(),
        () => ObjectUnionImplicit.trail(),
        {
            "typescript-json": TSON.createAssertType<ObjectUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionImplicit),
            "class-validator": assertClassValidator(CvObjectUnionImplicit),
            zod: assertZod(ZodObjectUnionImplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionImplicit),
        },
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        () => ObjectUnionExplicit.trail(),
        {
            "typescript-json": TSON.createAssertType<ObjectUnionExplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionExplicit),
            "class-validator": assertClassValidator(CvObjectUnionExplicit),
            zod: assertZod(ZodObjectUnionExplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionExplicit),
        },
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        () => ObjectUnionImplicit.trail(),
        {
            "typescript-json": TSON.createAssertType<ObjectUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsObjectUnionImplicit),
            "class-validator": assertClassValidator(CvObjectUnionImplicit),
            zod: assertZod(ZodObjectUnionImplicit),
            typebox: assertTypeBox(__TypeBoxObjectUnionImplicit),
        },
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        () => ArrayRecursive.trail(),
        {
            "typescript-json": TSON.createAssertType<ArrayRecursive[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursive),
            "class-validator": assertClassValidator(CvArrayRecursive),
            zod: assertZod(ZodArrayRecursive),
            typebox: assertTypeBox(__TypeBoxArrayRecursive),
        },
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        () => ArrayRecursiveUnionExplicit.trail(),
        {
            "typescript-json":
                TSON.createAssertType<ArrayRecursiveUnionExplicit[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionExplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionExplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionExplicit),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionExplicit),
        },
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        () => ArrayRecursiveUnionImplicit.trail(),
        {
            "typescript-json":
                TSON.createAssertType<ArrayRecursiveUnionImplicit[]>(),
            "io-ts": assertIoTs(IoTsArrayRecursiveUnionImplicit),
            "class-validator": assertClassValidator(
                CvArrayRecursiveUnionImplicit,
            ),
            zod: assertZod(ZodArrayRecursiveUnionImplicit),
            typebox: assertTypeBox(__TypeBoxArrayRecursiveUnionImplicit),
        },
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        () => UltimateUnion.trail(),
        {
            "typescript-json": TSON.createAssertType<UltimateUnion[]>(),
            "io-ts": assertIoTs(IoTsUltimateUnion),
            "class-validator": null,
            zod: assertZod(ZodUltimateUnion),
            typebox: assertTypeBox(__TypeBoxUltimateUnion),
        },
    ),
];
export { assertType as benchmark_assert };
