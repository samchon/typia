import * as t from "io-ts";

import { IJsonApplication } from "../../../src/schemas/IJsonApplication";
import { IJsonComponents } from "../../../src/schemas/IJsonComponents";
import { IJsonSchema } from "../../../src/schemas/IJsonSchema";

const Schema: t.Type<IJsonSchema> = t.recursion(
    "Schema",
    () =>
        t.union([
            Atomic,
            Constant,
            Array,
            Tuple,
            Reference,
            RecursiveReference,
            OneOf,
            Unknown,
        ]) as any,
);

const Unknown = t.type({});
const Atomic = t.type({
    type: t.union([
        t.literal("boolean"),
        t.literal("number"),
        t.literal("bigint"),
        t.literal("string"),
    ]),
    nullable: t.boolean,
    description: t.union([t.string, t.undefined]),
    default: t.union([t.string, t.number, t.boolean, t.bigint, t.undefined]),
});
const Constant = t.type({
    ...Atomic.props,
    constant: t.array(t.union([t.boolean, t.number, t.bigint, t.string])),
});

const Array: t.Type<IJsonSchema.IArray> = t.recursion(
    "Array",
    () =>
        t.type({
            type: t.literal("array"),
            items: Schema,
            nullable: t.boolean,
            description: t.union([t.string, t.undefined]),
        }) as any,
);
const Tuple: t.Type<IJsonSchema.ITuple> = t.recursion(
    "Tuple",
    () =>
        t.type({
            type: t.literal("array"),
            items: t.array(Schema),
            nullable: t.boolean,
            description: t.union([t.string, t.undefined]),
        }) as any,
);

const Reference = t.type({
    $ref: t.string,
    description: t.union([t.string, t.undefined]),
});
const RecursiveReference = t.type({
    $recursiveRef: t.string,
    description: t.union([t.string, t.undefined]),
});
const OneOf: t.Type<IJsonSchema.IOneOf> = t.recursion(
    "OneOf",
    () =>
        t.type({
            oneOf: t.array(Schema),
            description: t.union([t.string, t.undefined]),
        }) as any,
);

const ObjectDef: t.Type<IJsonComponents.IObject> = t.recursion(
    "ObjectDef",
    () =>
        t.type({
            $id: t.string,
            type: t.literal("object"),
            nullable: t.boolean,

            properties: t.record(t.string, Schema),
            patternProperties: t.union([
                t.record(t.string, Schema),
                t.undefined,
            ]),

            required: t.union([t.array(t.string), t.undefined]),
            description: t.union([t.string, t.undefined]),
        }) as any,
);
const Components: t.Type<IJsonComponents> = t.recursion(
    "Components",
    () =>
        t.type({
            schemas: t.record(t.string, ObjectDef),
        }) as any,
);

const Application: t.Type<IJsonApplication> = t.recursion(
    "Application",
    () =>
        t.type({
            schemas: t.array(Schema),
            components: Components,
            purpose: t.literal("swagger"),
            prefix: t.string,
        }) as any,
);

export const IoTsUltimateUnion: t.Type<IJsonApplication> = t.recursion(
    "UltimateUnion",
    () => t.array(Application) as any,
);
