import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";
import * as tr from "class-transformer";
import { ClassConstructor } from "class-transformer";
import * as cv from "class-validator";
import * as t from "io-ts";
import "reflect-metadata";
import { z } from "zod";

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
import { ValidateBenchmarker } from "../internal/ValidateBenchmarker";
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
const validateTypeBox =
    <S extends TSchema>(program: TypeCheck<S>) =>
    <T>(input: T) =>
        [...program.Errors(input)];
const validateIoTs =
    <S extends t.Mixed>(type: S) =>
    <T>(input: T) =>
        IoTsUtils.getPaths(type.decode(input));
const validateZod =
    <S extends z.ZodTypeAny>(type: S) =>
    <T>(input: T) => {
        const res = type.safeParse(input);
        if (res.success) return [];
        return res.error.errors;
    };
const validateClassValidator =
    <S extends object>(schema: ClassConstructor<S>) =>
    <T>(input: T) =>
        cv.validateSync(tr.plainToInstance(schema, input));

const prepare = ValidateBenchmarker.prepare([
    "typia",
    "typebox",
    "io-ts",
    "zod",
    "class-validator",
]);

/* -----------------------------------------------------------
    DO BENCHMARK
----------------------------------------------------------- */
const validate = () => [
    prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            typia: typia.createValidate<ObjectSimple>(),
            typebox: validateTypeBox(TypeBoxObjectSimple),
            "io-ts": validateIoTs(IoTsObjectSimple),
            zod: validateZod(ZodObjectSimple),
            "class-validator": validateClassValidator(CvObjectSimple),
        },
        ObjectSimple.SPOILERS,
    ),
    prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            typia: typia.createValidate<ObjectHierarchical>(),
            typebox: validateTypeBox(TypeBoxObjectHierarchical),
            "io-ts": validateIoTs(IoTsObjectHierarchical),
            zod: validateZod(ZodObjectHierarchical),
            "class-validator": validateClassValidator(CvObjectHierarchical),
        },
        ObjectHierarchical.SPOILERS,
    ),
    prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            typia: typia.createValidate<ObjectRecursive>(),
            typebox: validateTypeBox(TypeBoxObjectRecursive),
            "io-ts": validateIoTs(IoTsObjectRecursive),
            zod: validateZod(ZodObjectRecursive),
            "class-validator": validateClassValidator(CvObjectRecursive),
        },
        ObjectRecursive.SPOILERS,
    ),
    prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            typia: typia.createValidate<ObjectUnionExplicit>(),
            typebox: validateTypeBox(TypeBoxObjectUnionExplicit),
            "io-ts": validateIoTs(IoTsObjectUnionExplicit),
            zod: validateZod(ZodObjectUnionExplicit),
            "class-validator": validateClassValidator(CvObjectUnionExplicit),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            typia: typia.createValidate<ObjectUnionImplicit>(),
            typebox: validateTypeBox(TypeBoxObjectUnionImplicit),
            "io-ts": validateIoTs(IoTsObjectUnionImplicit),
            zod: validateZod(ZodObjectUnionImplicit),
            "class-validator": validateClassValidator(CvObjectUnionImplicit),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            typia: typia.createValidate<ArrayRecursive>(),
            typebox: validateTypeBox(TypeBoxArrayRecursive),
            "io-ts": validateIoTs(IoTsArrayRecursive),
            zod: validateZod(ZodArrayRecursive),
            "class-validator": validateClassValidator(CvArrayRecursive),
        },
        ArrayRecursive.SPOILERS,
    ),
    prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            typia: typia.createValidate<ArrayRecursiveUnionExplicit>(),
            typebox: validateTypeBox(TypeBoxArrayRecursiveUnionExplicit),
            "io-ts": validateIoTs(IoTsArrayRecursiveUnionExplicit),
            zod: validateZod(ZodArrayRecursiveUnionExplicit),
            "class-validator": validateClassValidator(
                CvArrayRecursiveUnionExplicit,
            ),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            typia: typia.createValidate<ArrayRecursiveUnionImplicit>(),
            typebox: validateTypeBox(TypeBoxArrayRecursiveUnionImplicit),
            "io-ts": validateIoTs(IoTsArrayRecursiveUnionImplicit),
            zod: validateZod(ZodArrayRecursiveUnionImplicit),
            "class-validator": validateClassValidator(
                CvArrayRecursiveUnionImplicit,
            ),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            typia: typia.createValidate<UltimateUnion>(),
            typebox: validateTypeBox(TypeBoxUltimateUnion),
            "io-ts": validateIoTs(IoTsUltimateUnion),
            zod: validateZod(ZodUltimateUnion),
            "class-validator": null,
        },
        UltimateUnion.SPOILERS,
    ),
];
export { validate as benchmark_validate };
