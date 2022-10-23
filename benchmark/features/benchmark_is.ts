import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

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
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
import { IoTsUltimateUnion } from "../structures/io-ts/IoTsUltimateUnion";
// TYPEBOX TYPES
import { TypeBoxArrayRecursive } from "../structures/typebox/TypeBoxArrayRecursive";
import { TypeBoxArrayRecursiveUnionExplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionExplicit";
import { TypeBoxArrayRecursiveUnionImplicit } from "../structures/typebox/TypeBoxArrayRecursiveUnionImplicit";
import { TypeBoxObjectHierarchical } from "../structures/typebox/TypeBoxObjectHierarchical";
import { TypeBoxObjectRecursive } from "../structures/typebox/TypeBoxObjectRecursive";
import { TypeBoxObjectUnionExplicit } from "../structures/typebox/TypeBoxObjectUnionExplicit";
import { TypeBoxObjectUnionImplicit } from "../structures/typebox/TypeBoxObjectUnionImplicit";
import { TypeBoxUltimateUnion } from "../structures/typebox/TypeBoxUltimateUnion";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
import { ZodObjectRecursive } from "../structures/zod/ZodObjectRecursive";
import { ZodObjectUnionExplicit } from "../structures/zod/ZodObjectUnionExplicit";
import { ZodObjectUnionImplicit } from "../structures/zod/ZodObjectUnionImplicit";
import { ZodUltimateUnion } from "../structures/zod/ZodUltimateUnion";

const is = () => [
    IsBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsObjectHierarchical.is(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectHierarchical, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: (input) => ZodObjectHierarchical.safeParse(input).success,
            typebox: (input) => TypeBoxObjectHierarchical.Check(input),
            ajv: (input) => AjvObjectHierarchical.Check(input),
        },
        ObjectHierarchical.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsObjectRecursive.is(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectRecursive, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: (input) => ZodObjectRecursive.safeParse(input).success,
            typebox: (input) => TypeBoxObjectRecursive.Check(input),
            ajv: (input) => AjvObjectRecursive.Check(input),
        },
        ObjectRecursive.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsObjectUnionExplicit.is(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionExplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: (input) => ZodObjectUnionExplicit.safeParse(input).success,
            typebox: (input) => TypeBoxObjectUnionExplicit.Check(input),
            ajv: (input) => AjvObjectUnionExplicit.Check(input),
        },
        ObjectUnionExplicit.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsObjectUnionImplicit.is(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionImplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: (input) => ZodObjectUnionImplicit.safeParse(input).success,
            typebox: (input) => TypeBoxObjectUnionImplicit.Check(input),
            ajv: (input) => AjvObjectUnionImplicit.Check(input),
        },
        ObjectUnionImplicit.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsArrayRecursive.is(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvArrayRecursive, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: (input) => ZodArrayRecursive.safeParse(input).success,
            typebox: (input) => TypeBoxArrayRecursive.Check(input),
            ajv: (input) => AjvArrayRecursive.Check(input),
        },
        ArrayRecursive.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionExplicit.is(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionExplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: (input) =>
                ZodArrayRecursiveUnionExplicit.safeParse(input).success,
            ajv: (input) => AjvArrayRecursiveUnionExplicit.Check(input),
            typebox: (input) => TypeBoxArrayRecursiveUnionExplicit.Check(input),
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionImplicit.is(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionImplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: (input) =>
                ZodArrayRecursiveUnionImplicit.safeParse(input).success,
            typebox: (input) => TypeBoxArrayRecursiveUnionImplicit.Check(input),
            ajv: (input) => AjvArrayRecursiveUnionImplicit.Check(input),
        },
        ArrayRecursiveUnionImplicit.SPOILERS,
    ),
    IsBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": (input) => IoTsUltimateUnion.is(input),
            "class-validator": () => false,
            zod: (input) => ZodUltimateUnion.safeParse(input).success,
            typebox: (input) => TypeBoxUltimateUnion.Check(input),
            ajv: (input) => AjvUltimateUnion.Check(input),
        },
        [],
    ),
];
export { is as benchmark_is };
