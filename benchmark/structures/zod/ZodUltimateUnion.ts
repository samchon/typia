import { z } from "zod";

import { IJsonApplication, IJsonComponents, IJsonSchema } from "../../../src";

const Schema: z.ZodType<IJsonSchema> = z.lazy(() =>
    z.union([
        Atomic,
        Constant,
        Array,
        Tuple,
        Reference,
        RecursiveReference,
        OneOf,
        Unknown,
    ]),
);

const Attribute = {
    description: z.union([z.string(), z.undefined()]),
    "x-tson-metaTags": z.union([
        z.undefined(),
        z.array(
            z.object({
                kind: z.string(),
            }),
        ),
    ]),
    "x-tson-jsDocTags": z.union([
        z.undefined(),
        z.array(
            z.object({
                name: z.string(),
                text: z.union([z.string(), z.undefined()]),
            }),
        ),
    ]),
};

const Unknown = z.object({});
const Atomic = z.object({
    type: z.union([
        z.literal("boolean"),
        z.literal("number"),
        z.literal("bigint"),
        z.literal("string"),
    ]),
    nullable: z.boolean(),
    description: z.union([z.string(), z.undefined()]),
    default: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.bigint(),
        z.undefined(),
    ]),
});
const Constant = Atomic.extend({
    constant: z.array(
        z.union([z.boolean(), z.number(), z.bigint(), z.string()]),
    ),
});

const Array: z.ZodType<IJsonSchema.IArray> = z.lazy(() =>
    z.object({
        type: z.literal("array"),
        items: Schema,
        nullable: z.boolean(),
        description: z.union([z.string(), z.undefined()]),
    }),
);
const Tuple: z.ZodType<IJsonSchema.ITuple> = z.lazy(() =>
    z.object({
        type: z.literal("array"),
        items: z.array(Schema),
        nullable: z.boolean(),
        description: z.union([z.string(), z.undefined()]),
    }),
);

const Reference: z.ZodType<IJsonSchema.IReference> = z.object({
    $ref: z.string(),
    description: z.union([z.string(), z.undefined()]),
});
const RecursiveReference: z.ZodType<IJsonSchema.IRecursiveReference> = z.object(
    {
        $recursiveRef: z.string(),
        description: z.union([z.string(), z.undefined()]),
    },
);
const OneOf: z.ZodType<IJsonSchema.IOneOf> = z.lazy(() =>
    z.object({
        oneOf: z.array(Schema),
        description: z.union([z.string(), z.undefined()]),
    }),
);

const ObjectDef: z.ZodType<IJsonComponents.IObject> = z.lazy(() =>
    z.object({
        $id: z.string(),
        type: z.literal("object"),
        nullable: z.boolean(),

        properties: z.record(Schema),
        patternProperties: z.union([z.undefined(), z.record(Schema)]),
        required: z.union([z.undefined(), z.array(z.string())]),
        description: z.union([z.string(), z.undefined()]),
    }),
);
const Components: z.ZodType<IJsonComponents> = z.lazy(() =>
    z.object({
        schemas: z.record(ObjectDef),
    }),
);

const Application: z.ZodType<IJsonApplication> = z.lazy(() =>
    z.object({
        schemas: z.array(Schema),
        components: Components,
        purpose: z.union([z.literal("ajv"), z.literal("swagger")]),
        prefix: z.string(),
    }),
);

export const ZodUltimateUnion = z.array(Application);
