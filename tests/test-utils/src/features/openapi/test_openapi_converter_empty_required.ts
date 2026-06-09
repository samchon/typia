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
          EmptyOpen: emptyOpenSwagger(),
          NoisyEmptyOpen: noisyEmptyOpenSwagger(),
          Record: recordSwagger(),
          NoisyRecord: noisyRecordSwagger(),
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
            EmptyOpen: emptyOpenV3(),
            NoisyEmptyOpen: noisyEmptyOpenV3(),
            Record: recordV3(),
            NoisyRecord: noisyRecordV3(),
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
            EmptyOpen: emptyOpenV31(),
            NoisyEmptyOpen: noisyEmptyOpenV31(),
            Record: recordV31(),
            NoisyRecord: noisyRecordV31(),
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
            EmptyOpen: emptyOpenV32(),
            NoisyEmptyOpen: noisyEmptyOpenV32(),
            Record: recordV32(),
            NoisyRecord: noisyRecordV32(),
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
    assertEmptyOpenObjectKeywords(
      `${name} upgraded open empty`,
      schemas.EmptyOpen!,
    );
    assertEmptyOpenObjectKeywords(
      `${name} upgraded noisy open empty`,
      schemas.NoisyEmptyOpen!,
    );
    assertRecordKeywordsOmitted(`${name} upgraded record`, schemas.Record!);
    assertNoisyRecordKeywordsPreserved(
      `${name} upgraded noisy record`,
      schemas.NoisyRecord!,
    );
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
        EmptyOpen: emptyOpenApi(),
        NoisyEmptyOpen: noisyEmptyOpenApi(),
        Record: recordOpenApi(),
        NoisyRecord: noisyRecordOpenApi(),
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
  assertEmptyOpenObjectKeywords(
    "downgraded swagger open empty",
    downgradedSwagger.definitions!.EmptyOpen!,
  );
  assertEmptyOpenObjectKeywords(
    "downgraded swagger noisy open empty",
    downgradedSwagger.definitions!.NoisyEmptyOpen!,
  );
  assertRecordKeywordsOmitted(
    "downgraded swagger record",
    downgradedSwagger.definitions!.Record!,
  );
  assertNoisyRecordKeywordsPreserved(
    "downgraded swagger noisy record",
    downgradedSwagger.definitions!.NoisyRecord!,
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
  assertEmptyOpenObjectKeywords(
    "downgraded v3.0 open empty",
    downgradedV30.components!.schemas!.EmptyOpen!,
  );
  assertEmptyOpenObjectKeywords(
    "downgraded v3.0 noisy open empty",
    downgradedV30.components!.schemas!.NoisyEmptyOpen!,
  );
  assertRecordKeywordsOmitted(
    "downgraded v3.0 record",
    downgradedV30.components!.schemas!.Record!,
  );
  assertNoisyRecordKeywordsPreserved(
    "downgraded v3.0 noisy record",
    downgradedV30.components!.schemas!.NoisyRecord!,
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
  assertEmptyOpenObjectKeywords(
    "downgraded v3.1 open empty",
    downgradedV31.components!.schemas!.EmptyOpen!,
  );
  assertEmptyOpenObjectKeywords(
    "downgraded v3.1 noisy open empty",
    downgradedV31.components!.schemas!.NoisyEmptyOpen!,
  );
  assertRecordKeywordsOmitted(
    "downgraded v3.1 record",
    downgradedV31.components!.schemas!.Record!,
  );
  assertNoisyRecordKeywordsPreserved(
    "downgraded v3.1 noisy record",
    downgradedV31.components!.schemas!.NoisyRecord!,
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

const emptyOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  required: [],
});

const noisyEmptyOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApi.IJsonSchema,
  },
  required: [],
});

const noisyRecordOpenApi = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApi.IJsonSchema,
  },
  additionalProperties: {
    type: "string",
  },
  required: [],
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

const emptyOpenV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  required: [],
});

const noisyEmptyOpenV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3.IJsonSchema,
  },
  required: [],
});

const noisyRecordV3 = (): OpenApiV3.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3.IJsonSchema,
  },
  additionalProperties: {
    type: "string",
  },
  required: [],
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

const emptyOpenV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  required: [],
});

const noisyEmptyOpenV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3_1.IJsonSchema,
  },
  required: [],
});

const noisyRecordV31 = (): OpenApiV3_1.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3_1.IJsonSchema,
  },
  additionalProperties: {
    type: "string",
  },
  required: [],
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

const emptyOpenV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  required: [],
});

const noisyEmptyOpenV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3_2.IJsonSchema,
  },
  required: [],
});

const noisyRecordV32 = (): OpenApiV3_2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as OpenApiV3_2.IJsonSchema,
  },
  additionalProperties: {
    type: "string",
  },
  required: [],
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

const emptyOpenSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  required: [],
});

const noisyEmptyOpenSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as SwaggerV2.IJsonSchema,
  },
  required: [],
});

const noisyRecordSwagger = (): SwaggerV2.IJsonSchema.IObject => ({
  type: "object",
  properties: {
    stale: undefined as unknown as SwaggerV2.IJsonSchema,
  },
  additionalProperties: {
    type: "string",
  },
  required: [],
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
      properties: object.properties,
      required: object.required,
    },
    {
      type: "object",
      additionalProperties: {
        type: "string",
      },
      properties: undefined,
      required: undefined,
    },
  );
};

const assertNoisyRecordKeywordsPreserved = (
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
      properties: object.properties,
      required: object.required,
    },
    {
      type: "object",
      additionalProperties: {
        type: "string",
      },
      properties: {},
      required: [],
    },
  );
};

const assertEmptyOpenObjectKeywords = (
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
    `${name} object shape`,
    {
      type: object.type,
      properties: object.properties,
      additionalProperties: object.additionalProperties,
      required: object.required,
    },
    {
      type: "object",
      properties: {},
      additionalProperties: undefined,
      required: [],
    },
  );
};
