import Ajv from "ajv";
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
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
import { ZodObjectRecursive } from "../structures/zod/ZodObjectRecursive";
import { ZodObjectUnionExplicit } from "../structures/zod/ZodObjectUnionExplicit";
import { ZodObjectUnionImplicit } from "../structures/zod/ZodObjectUnionImplicit";
import { ZodUltimateUnion } from "../structures/zod/ZodUltimateUnion";

function defaultSpoiler(data: any) {
    if (Array.isArray(data)) data.push({ fsaddsfasdf: "ASDfasdfsd" } as any);
    else if (typeof data === "object")
        (data as any)[Object.keys(data)[0]!] = { sdafasdf: "ASfsadf" };
}

function wrap<T>(
    data: T,
    functor: (input: T) => boolean,
    spoiler?: (data: T) => void,
): null | ((input: T) => boolean) {
    try {
        if (functor(data) === false) return null;
        (spoiler || defaultSpoiler)(data);
        return functor(data) === true ? null : functor;
    } catch {
        return null;
    }
}

function byAjv<T>(
    data: T,
    app: TSON.IJsonApplication,
    spoiler?: (data: T) => void,
): null | ((input: T) => any) {
    try {
        (app.schemas[0] as any).$id = "main";
        const ajv = new Ajv({
            schemas: [app.schemas[0], ...Object.values(app.components.schemas)],
        });
        const functor = ajv.getSchema("main") || null;
        return functor !== null ? wrap(data, <any>functor, spoiler) : null;
    } catch {
        return null;
    }
}

const is = () => [
    IsBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ObjectHierarchical.generate(), (input) =>
                IoTsObjectHierarchical.is(input),
            ),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectHierarchical, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: wrap(
                ObjectHierarchical.generate(),
                (input) => ZodObjectHierarchical.safeParse(input).success,
            ),
            ajv: byAjv(
                ObjectHierarchical.generate(),
                TSON.application<[ObjectHierarchical], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ObjectRecursive.generate(), (input) =>
                IoTsObjectRecursive.is(input),
            ),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectRecursive, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: wrap(
                ObjectRecursive.generate(),
                (input) => ZodObjectRecursive.safeParse(input).success,
            ),
            ajv: byAjv(
                ObjectRecursive.generate(),
                TSON.application<[ObjectRecursive], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ObjectUnionExplicit.generate(), (input) =>
                IoTsObjectUnionExplicit.is(input),
            ),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionExplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: wrap(
                ObjectUnionExplicit.generate(),
                (input) => ZodObjectUnionExplicit.safeParse(input).success,
            ),
            ajv: byAjv(
                ObjectUnionExplicit.generate(),
                TSON.application<[ObjectUnionExplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ObjectUnionImplicit.generate(), (input) =>
                IoTsObjectUnionImplicit.is(input),
            ),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionImplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: wrap(
                ObjectUnionImplicit.generate(),
                (input) => ZodObjectUnionImplicit.safeParse(input).success,
            ),
            ajv: byAjv(
                ObjectUnionImplicit.generate(),
                TSON.application<[ObjectUnionImplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ArrayRecursive.generate(), (input) =>
                IoTsArrayRecursive.is(input),
            ),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvArrayRecursive, input);
                return cv.validateSync(cla).length === 0;
            },
            zod: wrap(
                ArrayRecursive.generate(),
                (input) => ZodArrayRecursive.safeParse(input).success,
            ),
            ajv: byAjv(
                ArrayRecursive.generate(),
                TSON.application<[ArrayRecursive], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ArrayRecursiveUnionExplicit.generate(), (input) =>
                IoTsArrayRecursiveUnionExplicit.is(input),
            ),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionExplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: wrap(
                ArrayRecursiveUnionExplicit.generate(),
                (input) =>
                    ZodArrayRecursiveUnionExplicit.safeParse(input).success,
            ),
            ajv: byAjv(
                ArrayRecursiveUnionExplicit.generate(),
                TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.is(input),
            "io-ts": wrap(ArrayRecursiveUnionImplicit.generate(), (input) =>
                IoTsArrayRecursiveUnionImplicit.is(input),
            ),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionImplicit, elem),
                );
                return classes.every(
                    (clas) => cv.validateSync(clas).length === 0,
                );
            },
            zod: wrap(
                ArrayRecursiveUnionImplicit.generate(),
                (input) =>
                    ZodArrayRecursiveUnionImplicit.safeParse(input).success,
            ),
            ajv: byAjv(
                ArrayRecursiveUnionImplicit.generate(),
                TSON.application<[ArrayRecursiveUnionImplicit], "ajv">(),
            ),
        },
    ),
    IsBenchmarker.prepare("ultimate union", () => UltimateUnion.generate(), {
        "typescript-json": (input) => TSON.is(input),
        "io-ts": wrap(UltimateUnion.generate(), (input) =>
            IoTsUltimateUnion.is(input),
        ),
        "class-validator": null,
        zod: wrap(
            UltimateUnion.generate(),
            (input) => ZodUltimateUnion.safeParse(input).success,
        ),
        ajv: byAjv(
            UltimateUnion.generate(),
            TSON.application<[UltimateUnion], "ajv">(),
        ),
    }),
];
export { is as benchmark_is };
