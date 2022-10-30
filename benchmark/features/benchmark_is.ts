import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";
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
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { IsBenchmarker } from "../internal/IsBenchmarker";
// AJV TYPES
import { AjvArrayRecursive } from "../structures/ajv/AjvArrayRecursive";
import { AjvArrayRecursiveUnionExplicit } from "../structures/ajv/AjvArrayRecursiveUnionExplicit";
import { AjvArrayRecursiveUnionImplicit } from "../structures/ajv/AjvArrayRecursiveUnionImplicit";
import { AjvObjectHierarchical } from "../structures/ajv/AjvObjectHierarchical";
import { AjvObjectRecursive } from "../structures/ajv/AjvObjectRecursive";
import { AjvObjectUnionExplicit } from "../structures/ajv/AjvObjectUnionExplicit";
import { AjvObjectUnionImplicit } from "../structures/ajv/AjvObjectUnionImplicit";
import { AjvUltimateUnion } from "../structures/ajv/AjvUltimateUnion";
// CLASS-VALIDATOR
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArrayRecursiveUnionImplicit } from "../structures/class-validator/CvArrayRecursiveUnionImplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectRecursive } from "../structures/class-validator/CvObjectRecursive";
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
const isTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) =>
        program.Check(input);
const isAjv =
    <T>(program: { Check: (input: T) => boolean }) =>
    (input: T) =>
        program.Check(input);
const isIoTs =
    <S extends t.Mixed>(type: S) =>
    <T>(input: T) =>
        type.is(input);
const isZod =
    <S extends z.ZodTypeAny>(type: S) =>
    <T>(input: T) =>
        type.safeParse(input).success;
const isClassValidator =
    <S extends object>(schema: ClassConstructor<S>) =>
    <T>(input: T) => {
        const cla = tr.plainToInstance(schema, input);
        return cv.validateSync(cla).length === 0;
    };

const prepare = IsBenchmarker.prepare([
    "typescript-json",
    "typebox",
    "ajv",
    "io-ts",
    "zod",
    "class-validator",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const is = () => [
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": TSON.createIs<ObjectHierarchical>(),
            "io-ts": isIoTs(IoTsObjectHierarchical),
            "class-validator": isClassValidator(CvObjectHierarchical),
            zod: isZod(ZodObjectHierarchical),
            typebox: isTypeBox(TypeBoxObjectHierarchical),
            ajv: isAjv(AjvObjectHierarchical),
        },
        ObjectHierarchical.SPOILERS,
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": TSON.createIs<ObjectRecursive>(),
            "io-ts": isIoTs(IoTsObjectRecursive),
            "class-validator": isClassValidator(CvObjectRecursive),
            zod: isZod(ZodObjectRecursive),
            typebox: isTypeBox(TypeBoxObjectRecursive),
            ajv: isAjv(AjvObjectRecursive),
        },
        ObjectRecursive.SPOILERS,
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": TSON.createIs<ObjectUnionExplicit>(),
            "io-ts": isIoTs(IoTsObjectUnionExplicit),
            "class-validator": isClassValidator(CvObjectUnionExplicit),
            zod: isZod(ZodObjectUnionExplicit),
            typebox: isTypeBox(TypeBoxObjectUnionExplicit),
            ajv: isAjv(AjvObjectUnionExplicit),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": TSON.createIs<ObjectUnionImplicit>(),
            "io-ts": isIoTs(IoTsObjectUnionImplicit),
            "class-validator": isClassValidator(CvObjectUnionImplicit),
            zod: isZod(ZodObjectUnionImplicit),
            typebox: isTypeBox(TypeBoxObjectUnionImplicit),
            ajv: isAjv(AjvObjectUnionImplicit),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": TSON.createIs<ArrayRecursive>(),
            "io-ts": isIoTs(IoTsArrayRecursive),
            "class-validator": isClassValidator(CvArrayRecursive),
            zod: isZod(ZodArrayRecursive),
            typebox: isTypeBox(TypeBoxArrayRecursive),
            ajv: isAjv(AjvArrayRecursive),
        },
        ArrayRecursive.SPOILERS,
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": TSON.createIs<ArrayRecursiveUnionExplicit>(),
            "io-ts": isIoTs(IoTsArrayRecursiveUnionExplicit),
            "class-validator": isClassValidator(CvArrayRecursiveUnionExplicit),
            zod: isZod(ZodArrayRecursiveUnionExplicit),
            typebox: isTypeBox(TypeBoxArrayRecursiveUnionExplicit),
            ajv: isAjv(AjvArrayRecursiveUnionExplicit),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": TSON.createIs<ArrayRecursiveUnionImplicit>(),
            "io-ts": isIoTs(IoTsArrayRecursiveUnionImplicit),
            "class-validator": isClassValidator(CvArrayRecursiveUnionImplicit),
            zod: isZod(ZodArrayRecursiveUnionImplicit),
            typebox: isTypeBox(TypeBoxArrayRecursiveUnionImplicit),
            ajv: isAjv(AjvArrayRecursiveUnionImplicit),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": TSON.createIs<UltimateUnion>(),
            "io-ts": isIoTs(IoTsUltimateUnion),
            "class-validator": null,
            zod: isZod(ZodUltimateUnion),
            typebox: isTypeBox(TypeBoxUltimateUnion),
            ajv: isAjv(AjvUltimateUnion),
        },
        UltimateUnion.SPOILERS,
    ),
];
export { is as benchmark_is };
