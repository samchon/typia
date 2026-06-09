import { TestValidator } from "@nestia/e2e";
import {
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI conversion preserves empty `required` arrays.
 *
 * The converter family can synthesize object schemas from version upgrades,
 * downgrades, and `allOf` merges. Version conversion must preserve explicit
 * empty object keywords instead of stripping them as a cleanup step.
 *
 * 1. Upgrade Swagger/OpenAPI documents containing optional-only objects.
 * 2. Downgrade an emended OpenAPI document containing `required: []`.
 * 3. Assert every converted object keeps its shape and empty `required`.
 */
export const test_openapi_converter_empty_required = (): void => {
  const upgraded = [
    [
      "swagger",
      OpenApiConverter.upgradeDocument({
        swagger: "2.0",
        info: { title: "test", version: "1.0.0" },
        paths: {},
        definitions: {
          Target: optionalSwagger(),
          Record: recordSwagger(),
          Merged: mergedSwagger(),
          MergedRequired: mergedRequiredSwagger(),
          MergedRequiredFirst: mergedRequiredFirstSwagger(),
        },
      } satisfies SwaggerV2.IDocument).components.schemas!,
    ],
    [
      "v3.0",
      OpenApiConverter.upgradeDocument({
        openapi: "3.0.0",
        info: { title: "test", version: "1.0.0" },
        paths: {},
        components: {
          schemas: {
            Target: optionalV3(),
            Record: recordV3(),
            Merged: mergedV3(),
            MergedRequired: mergedRequiredV3(),
            MergedRequiredFirst: mergedRequiredFirstV3(),
          },
        },
      } satisfies OpenApiV3.IDocument).components.schemas!,
    ],
    [
      "v3.1",
      OpenApiConverter.upgradeDocument({
        openapi: "3.1.0",
        info: { title: "test", version: "1.0.0" },
        paths: {},
        components: {
          schemas: {
            Target: optionalV31(),
            Record: recordV31(),
            Merged: mergedV31(),
            MergedRequired: mergedRequiredV31(),
            MergedRequiredFirst: mergedRequiredFirstV31(),
          },
        },
      } satisfies OpenApiV3_1.IDocument).components.schemas!,
    ],
    [
      "v3.2",
      OpenApiConverter.upgradeDocument({
        openapi: "3.2.0",
        info: { title: "test", version: "1.0.0" },
        paths: {},
        components: {
          schemas: {
            Target: optionalV32(),
            Record: recordV32(),
            Merged: mergedV32(),
            MergedRequired: mergedRequiredV32(),
            MergedRequiredFirst: mergedRequiredFirstV32(),
          },
        },
      } satisfies OpenApiV3_2.IDocument).components.schemas!,
    ],
  ] as const;
  for (const [name, schemas] of upgraded) {
    assertObjectEmptyRequired(`${name} upgraded object`, schemas.Target!);
    assertRecordKeywordsOmitted(`${name} upgraded record`, schemas.Record!);
    assertObjectEmptyRequired(
      `${name} upgraded optional allOf`,
      schemas.Merged!,
      false,
    );
    assertObjectRequired(
      `${name} upgraded required allOf`,
      schemas.MergedRequired!,
      false,
    );
    assertObjectRequired(
      `${name} upgraded required-first allOf`,
      schemas.MergedRequiredFirst!,
      false,
    );
  }

  const emended: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        Target: optionalOpenApi(),
        Record: recordOpenApi(),
        Required: requiredOpenApi(),
      },
    },
  };
  const downgradedSwagger = OpenApiConverter.downgradeDocument(emended, "2.0");
  const downgradedV30 = OpenApiConverter.downgradeDocument(emended, "3.0");
  const downgradedV31 = OpenApiConverter.downgradeDocument(emended, "3.1");
  assertObjectEmptyRequired(
    "downgraded swagger",
    downgradedSwagger.definitions!.Target!,
  );
  assertRecordKeywordsOmitted(
    "downgraded swagger record",
    downgradedSwagger.definitions!.Record!,
  );
  assertObjectRequired(
    "downgraded swagger required",
    downgradedSwagger.definitions!.Required!,
    false,
    {
      id: {
        type: "string",
      },
    },
  );
  assertObjectEmptyRequired(
    "downgraded v3.0",
    downgradedV30.components!.schemas!.Target!,
  );
  assertRecordKeywordsOmitted(
    "downgraded v3.0 record",
    downgradedV30.components!.schemas!.Record!,
  );
  assertObjectRequired(
    "downgraded v3.0 required",
    downgradedV30.components!.schemas!.Required!,
    false,
    {
      id: {
        type: "string",
      },
    },
  );
  assertObjectEmptyRequired(
    "downgraded v3.1",
    downgradedV31.components!.schemas!.Target!,
  );
  assertRecordKeywordsOmitted(
    "downgraded v3.1 record",
    downgradedV31.components!.schemas!.Record!,
  );
  assertObjectRequired(
    "downgraded v3.1 required",
    downgradedV31.components!.schemas!.Required!,
    false,
    {
      id: {
        type: "string",
      },
    },
  );
};

const optionalOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    name: { type: "string" },
  },
  additionalProperties: false,
  required: [],
});

const requiredOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
});

const recordOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  additionalProperties: {
    type: "string",
  },
});

const optionalV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    name: { type: "string" },
  },
  additionalProperties: false,
  required: [],
});

const recordV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  additionalProperties: {
    type: "string",
  },
});

const optionalV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    name: { type: "string" },
  },
  additionalProperties: false,
  required: [],
});

const recordV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  additionalProperties: {
    type: "string",
  },
});

const optionalV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    name: { type: "string" },
  },
  additionalProperties: false,
  required: [],
});

const recordV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  additionalProperties: {
    type: "string",
  },
});

const optionalSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    name: { type: "string" },
  },
  additionalProperties: false,
  required: [],
});

const recordSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  additionalProperties: {
    type: "string",
  },
});

const emptyV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const emptyV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const emptyV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const emptySwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const requiredV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
});

const requiredV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
});

const requiredV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
});

const requiredSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
});

const mergedV3 = (): OpenApiV3.IJsonSchema.IAllOf => ({
  allOf: [optionalV3(), emptyV3()],
});

const mergedV31 = (): OpenApiV3_1.IJsonSchema.IAllOf => ({
  allOf: [optionalV31(), emptyV31()],
});

const mergedV32 = (): OpenApiV3_2.IJsonSchema.IAllOf => ({
  allOf: [optionalV32(), emptyV32()],
});

const mergedSwagger = (): SwaggerV2.IJsonSchema.IAllOf => ({
  allOf: [optionalSwagger(), emptySwagger()],
});

const mergedRequiredV3 = (): OpenApiV3.IJsonSchema.IAllOf => ({
  allOf: [optionalV3(), requiredV3()],
});

const mergedRequiredV31 = (): OpenApiV3_1.IJsonSchema.IAllOf => ({
  allOf: [optionalV31(), requiredV31()],
});

const mergedRequiredV32 = (): OpenApiV3_2.IJsonSchema.IAllOf => ({
  allOf: [optionalV32(), requiredV32()],
});

const mergedRequiredSwagger = (): SwaggerV2.IJsonSchema.IAllOf => ({
  allOf: [optionalSwagger(), requiredSwagger()],
});

const mergedRequiredFirstV3 = (): OpenApiV3.IJsonSchema.IAllOf => ({
  allOf: [requiredV3(), optionalV3()],
});

const mergedRequiredFirstV31 = (): OpenApiV3_1.IJsonSchema.IAllOf => ({
  allOf: [requiredV31(), optionalV31()],
});

const mergedRequiredFirstV32 = (): OpenApiV3_2.IJsonSchema.IAllOf => ({
  allOf: [requiredV32(), optionalV32()],
});

const mergedRequiredFirstSwagger = (): SwaggerV2.IJsonSchema.IAllOf => ({
  allOf: [requiredSwagger(), optionalSwagger()],
});

const assertObjectEmptyRequired = (
  name: string,
  schema:
    | OpenApi.IJsonSchema
    | OpenApiV3.IJsonSchema
    | OpenApiV3_1.IJsonSchema
    | OpenApiV3_2.IJsonSchema
    | SwaggerV2.IJsonSchema,
  expectedAdditionalProperties: false | undefined = false,
): void => {
  const object = schema as
    | OpenApi.IJsonSchema.IObject
    | OpenApiV3.IJsonSchema.IObject
    | OpenApiV3_1.IJsonSchema.IObject
    | OpenApiV3_2.IJsonSchema.IObject
    | SwaggerV2.IJsonSchema.IObject;
  TestValidator.equals(
    `${name} object shape`,
    {
      type: object.type,
      properties: object.properties,
      additionalProperties: object.additionalProperties,
      required: object.required,
    },
    {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
      },
      additionalProperties: expectedAdditionalProperties,
      required: [],
    },
  );
};

const assertObjectRequired = (
  name: string,
  schema:
    | OpenApi.IJsonSchema
    | OpenApiV3.IJsonSchema
    | OpenApiV3_1.IJsonSchema
    | OpenApiV3_2.IJsonSchema
    | SwaggerV2.IJsonSchema,
  expectedAdditionalProperties: false | undefined = undefined,
  expectedProperties: Record<string, { type: "string" }> = {
    name: {
      type: "string",
    },
    id: {
      type: "string",
    },
  },
): void => {
  const object = schema as
    | OpenApi.IJsonSchema.IObject
    | OpenApiV3.IJsonSchema.IObject
    | OpenApiV3_1.IJsonSchema.IObject
    | OpenApiV3_2.IJsonSchema.IObject
    | SwaggerV2.IJsonSchema.IObject;
  TestValidator.equals(
    `${name} object shape`,
    {
      type: object.type,
      properties: object.properties,
      additionalProperties: object.additionalProperties,
      required: object.required,
    },
    {
      type: "object",
      properties: expectedProperties,
      additionalProperties: expectedAdditionalProperties,
      required: ["id"],
    },
  );
};

const assertRecordKeywordsOmitted = (
  name: string,
  schema:
    | OpenApi.IJsonSchema
    | OpenApiV3.IJsonSchema
    | OpenApiV3_1.IJsonSchema
    | OpenApiV3_2.IJsonSchema
    | SwaggerV2.IJsonSchema,
): void => {
  const object = schema as
    | OpenApi.IJsonSchema.IObject
    | OpenApiV3.IJsonSchema.IObject
    | OpenApiV3_1.IJsonSchema.IObject
    | OpenApiV3_2.IJsonSchema.IObject
    | SwaggerV2.IJsonSchema.IObject;
  TestValidator.equals(
    `${name} record shape`,
    {
      type: object.type,
      additionalProperties: object.additionalProperties,
      properties: hasOwn(object, "properties"),
      required: hasOwn(object, "required"),
    },
    {
      type: "object",
      additionalProperties: {
        type: "string",
      },
      properties: false,
      required: false,
    },
  );
};

const hasOwn = (obj: object, key: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, key);
