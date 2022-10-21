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

function defaultSpoiler(data: any) {
    if (Array.isArray(data)) data.push({ fsaddsfasdf: "ASDfasdfsd" } as any);
    else if (typeof data === "object")
        (data as any)[Object.keys(data)[0]!] = { sdafasdf: "ASfsadf" };
}

function wrap<T>(
    data: T,
    functor: (input: T) => boolean,
    spoilers?: Array<(data: T) => void>,
): null | ((input: T) => boolean) {
    try {
        if (functor(data) === false) return null;
        for (const spoil of spoilers || [defaultSpoiler]) {
            const copied = JSON.parse(JSON.stringify(data));
            spoil(copied);
            if (functor(copied) === true) return null;
        }
        return functor;
    } catch {
        return null;
    }
}

function byAjv<T>(
    data: T,
    app: TSON.IJsonApplication,
    spoilers?: Array<(data: T) => void>,
): null | ((input: T) => any) {
    try {
        (app.schemas[0] as any).$id = "main";
        const ajv = new Ajv({
            schemas: [app.schemas[0], ...Object.values(app.components.schemas)],
        });
        const functor = ajv.getSchema("main") || null;
        if (functor === null) return null;
        for (const spoil of spoilers || [defaultSpoiler]) {
            const copied = JSON.parse(JSON.stringify(data));
            spoil(copied);
            if (functor(copied) === true) return null;
        }
        return functor;
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
            typebox: wrap(ObjectHierarchical.generate(), (input) =>
                TypeBoxObjectHierarchical.Check(input),
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
            typebox: wrap(ObjectRecursive.generate(), (input) =>
                TypeBoxObjectRecursive.Check(input),
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
            typebox: wrap(
                ObjectUnionExplicit.generate(),
                (input) => TypeBoxObjectUnionExplicit.Check(input),
                [
                    (input) => (input[0].type = "line"), // point
                    (input) => (input[1].type = "circle"), // line
                    (input) => (input[2].type = "polyline"), // triangle
                    (input) => (input[3].type = "point"), // rectangle
                    (input) => (input[4].type = "line"), // polyline
                    (input) => (input[5].type = "point"), // polygon
                    (input) => (input[6].type = "polyline"), // circle
                ],
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
            typebox: wrap(
                ObjectUnionImplicit.generate(),
                (input) => TypeBoxObjectUnionImplicit.Check(input),
                [
                    (input) =>
                        ((input[0] as ObjectUnionImplicit.IPoint).x =
                            {} as any),
                    (input) =>
                        ((input[1] as ObjectUnionImplicit.ILine).p2 =
                            [] as any),
                    (input) =>
                        ((input[2] as ObjectUnionImplicit.ITriangle).p3 =
                            null!),
                    (input) =>
                        ((input[3] as ObjectUnionImplicit.IRectangle).p4 =
                            null!),
                    (input) =>
                        ((input[4] as ObjectUnionImplicit.IPolyline).points =
                            3 as any),
                    (input) =>
                        ((input[5] as ObjectUnionImplicit.IPolygon).outer =
                            {} as any),
                    (input) =>
                        ((input[6] as ObjectUnionImplicit.ICircle).radius =
                            "string" as any),
                ],
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
            typebox: wrap(
                ArrayRecursive.generate(),
                (input) => TypeBoxArrayRecursive.Check(input),
                [
                    (input) => (input.id = null!),
                    (input) => (input.code = 3 as any),
                    (input) => (input.sequence = "number" as any),
                    (input) => (input.created_at = [] as any),
                    (input) => (input.children = { length: 0 } as any[]),
                    (input) =>
                        (input.children[0].children[0].sequence =
                            "number" as any),
                ],
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
            typebox: wrap(
                ArrayRecursiveUnionExplicit.generate(),
                (input) => TypeBoxArrayRecursiveUnionExplicit.Check(input),
                [
                    //----
                    // SEQUENCE OF GENERATED BUCKETS
                    //----
                    // 0. IMAGE
                    // 1. TEXT
                    // 2. ZIP
                    // 3~5. SHORTCUTS
                    // 6. DIRECTORY
                    // 7. SHORTCUT OF DIRECTORY

                    //----
                    // WRONG TYPES
                    //----
                    (input) => (input[0].type = "directory"),
                    (input) => (input[1].type = "directory"),
                    (input) => (input[2].type = "text" as "file"),
                    (input) => (input[3].type = "directory"),
                    (input) => (input[4].type = "text" as "file"),
                    (input) => (input[5].type = "directory"),
                    (input) => (input[6].type = "file"),

                    //----
                    // WRONG EXTENSIONS
                    //---
                    (input) =>
                        ((
                            input[0] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "txt"),
                    (input) =>
                        ((
                            input[1] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "zip"),
                    (input) =>
                        ((
                            input[2] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "jpg"),
                    (input) =>
                        ((
                            input[3] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "txt"),
                    (input) =>
                        ((
                            input[4] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "zip"),
                    (input) =>
                        ((
                            input[5] as ArrayRecursiveUnionExplicit.IFile
                        ).extension = "jpg"),

                    //----
                    // WRONG PROPERTIES
                    //----
                    (input) => (input[0].id = "uuid" as any as number),
                    (input) => (input[1].name = 3 as any as string),
                    (input) => (input[2].path = {} as any as string),
                    (input) =>
                        ((
                            input[3] as ArrayRecursiveUnionExplicit.IShortcut
                        ).target = [] as any as ArrayRecursiveUnionExplicit.IBucket),
                    (input) =>
                        ((
                            input[4] as ArrayRecursiveUnionExplicit.IShortcut
                        ).extension = null as any as "lnk"),
                    (input) => (input[5].type = [] as any as "directory"),
                    (input) =>
                        ((
                            input[6] as ArrayRecursiveUnionExplicit.IDirectory
                        ).children[0].path = [] as any as string),
                ],
            ),
            ajv: null,
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
            typebox: wrap(
                ArrayRecursiveUnionImplicit.generate(),
                (input) => TypeBoxArrayRecursiveUnionImplicit.Check(input),
                [
                    //----
                    // SEQUENCE OF GENERATED BUCKETS
                    //----
                    // 0. IMAGE
                    // 1. TEXT
                    // 2. ZIP
                    // 3~5. SHORTCUTS
                    // 6. DIRECTORY
                    // 7. SHORTCUT OF DIRECTORY

                    //----
                    // ERASE KEY PROPERTIES
                    //----
                    (input) => delete (input[0] as any).url,
                    (input) => delete (input[1] as any).content,
                    (input) => delete (input[2] as any).count,
                    (input) => delete (input[3] as any).target,
                    (input) => delete (input[4] as any).path,
                    (input) => delete (input[5] as any).id,
                    (input) => delete (input[6] as any).children,

                    //----
                    // WRONG PROPERTIES
                    //----
                    (input) => (input[0].id = "uuid" as any as number),
                    (input) => (input[1].name = 3 as any as string),
                    (input) => (input[2].path = {} as any as string),
                    (input) =>
                        ((
                            input[3] as ArrayRecursiveUnionImplicit.IShortcut
                        ).target = [] as any as ArrayRecursiveUnionImplicit.IBucket),
                    (input) =>
                        ((
                            input[4] as ArrayRecursiveUnionImplicit.IShortcut
                        ).name = null as any as "string"),
                    (input) => (input[5].path = [] as any as "directory"),
                    (input) =>
                        ((
                            input[6] as ArrayRecursiveUnionImplicit.IDirectory
                        ).children[0].path = [] as any as string),
                ],
            ),
            ajv: null,
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
        typebox: wrap(
            UltimateUnion.generate(),
            (input) => TypeBoxUltimateUnion.Check(input),
            [
                (input) =>
                    (input[0].schemas[0] = {
                        type: "wrong", // CAN AVOID UNKOWN TYPE?
                    }),
                (input) =>
                    (input[0].schemas[0] = {
                        type: "number",
                        nullable: false,
                        enum: ["1", "2", "3", "4"],
                    }),
            ],
        ),
        ajv: null,
    }),
];
export { is as benchmark_is };
