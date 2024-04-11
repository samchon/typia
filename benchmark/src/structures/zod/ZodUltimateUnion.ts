import { OpenApi } from "@samchon/openapi";
import { IJsonApplication } from "typia";
import { z } from "zod";

const Schema: z.ZodType<OpenApi.IJsonSchema> = z.lazy(
  () =>
    z.union([Atomic, Constant, Array, Tuple, Reference, OneOf, Unknown]) as any,
);

const Attribute = {
  description: z.union([z.string(), z.undefined()]),
  "x-typia-jsDocTags": z.union([
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
  constant: z.array(z.union([z.boolean(), z.number(), z.bigint(), z.string()])),
});

const Array: z.ZodType<OpenApi.IJsonSchema.IArray> = z.lazy(() =>
  z.object({
    type: z.literal("array"),
    items: Schema,
    description: z.union([z.string(), z.undefined()]),
  }),
);
const Tuple: z.ZodType<OpenApi.IJsonSchema.ITuple> = z.lazy(
  () =>
    z.object({
      type: z.literal("array"),
      prefixItems: z.array(Schema),
      additionalItems: z.union([Schema, z.undefined(), z.boolean()]),
      minItems: z.number().optional(),
      maxItems: z.number().optional(),
      description: z.union([z.string(), z.undefined()]),
    }) as any,
);

const Reference: z.ZodType<OpenApi.IJsonSchema.IReference> = z.object({
  $ref: z.string(),
  description: z.union([z.string(), z.undefined()]),
});
const OneOf: z.ZodType<OpenApi.IJsonSchema.IOneOf> = z.lazy(() =>
  z.object({
    oneOf: z.array(Schema),
    description: z.union([z.string(), z.undefined()]),
  }),
);

const ObjectDef: z.ZodType<OpenApi.IJsonSchema.IObject> = z.lazy(() =>
  z.object({
    $id: z.string(),
    type: z.literal("object"),

    properties: z.record(Schema),
    patternProperties: z.union([z.undefined(), z.record(Schema)]),
    required: z.union([z.undefined(), z.array(z.string())]),
    description: z.union([z.string(), z.undefined()]),
  }),
);
const Components: z.ZodType<OpenApi.IComponents> = z.lazy(() =>
  z.object({
    schemas: z.record(ObjectDef),
  }),
);

const Application: z.ZodType<IJsonApplication> = z.lazy(
  () =>
    z.object({
      schemas: z.array(Schema),
      components: Components,
      version: z.union([z.literal("3.0"), z.literal("3.1")]),
    }) as any,
);

export const ZodUltimateUnion = z.array(Application);
