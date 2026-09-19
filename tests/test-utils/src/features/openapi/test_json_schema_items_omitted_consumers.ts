import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import {
  HttpMigration,
  LlmSchemaConverter,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";

/**
 * Verifies every emended-schema consumer reads an items-less array as `any[]`.
 *
 * `OpenApiTypeChecker.isArray` requires `items`, so `{ type: "array" }` matched
 * no branch of any walker. #2392 and #2404 made the converters restore the open
 * `items: {}`, but the other consumers still missed it: the validator accepted
 * any value for such a property, the LLM converter emitted an array without
 * `items` and left `minItems` on it under `strict`, `covers` denied the
 * equivalent open array, union discrimination ignored it, and HTTP migration
 * rejected it as a `pipeDelimited` query parameter.
 *
 * 1. Validate a non-array and an array against an items-less array property, and
 *    an array against unions that must discriminate it.
 * 2. Convert an items-less array to LLM schemas, strict and not.
 * 3. Compare it with the open array through `covers`, in both directions.
 * 4. Migrate a `pipeDelimited` query parameter typed as an items-less array.
 */
export const test_json_schema_items_omitted_consumers = (): void => {
  const bare = { type: "array" } as unknown as OpenApi.IJsonSchema;
  const object: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: { tags: bare },
    required: ["tags"],
  };

  // VALIDATOR
  const rejected = OpenApiValidator.validate({
    components: {},
    schema: object,
    value: { tags: "nope" },
    required: true,
  });
  TestEquality.equals(
    "validator rejects a non-array",
    {
      success: false,
      errors: [
        { path: "$input.tags", expected: "Array<unknown>", value: "nope" },
      ],
    } as unknown,
    {
      success: rejected.success,
      errors: rejected.success ? [] : rejected.errors,
    },
  );
  TestEquality.equals(
    "validator accepts a mixed array",
    true,
    OpenApiValidator.validate({
      components: {},
      schema: object,
      value: { tags: [1, "a", null] },
      required: true,
    }).success,
  );

  // UNION DISCRIMINATION
  const unions: Array<[string, OpenApi.IJsonSchema[]]> = [
    [
      "beside an object",
      [bare, { type: "object", properties: {}, required: [] }],
    ],
    [
      "beside a string array",
      [bare, { type: "array", items: { type: "string" } }],
    ],
  ];
  for (const [title, oneOf] of unions)
    TestEquality.equals(
      `validator accepts a mixed array in a union ${title}`,
      true,
      OpenApiValidator.validate({
        components: {},
        schema: { oneOf },
        value: [1, "a"],
        required: true,
      }).success,
    );

  // LLM CONVERTER
  const minItems = {
    type: "array",
    minItems: 2,
  } as unknown as OpenApi.IJsonSchema;
  for (const [strict, expected] of [
    [false, { type: "array", minItems: 2, items: {} }],
    [true, { type: "array", description: "@minItems 2", items: {} }],
  ] as const) {
    const converted = LlmSchemaConverter.schema({
      config: { strict },
      components: {},
      $defs: {},
      schema: minItems,
    });
    TestEquality.equals<unknown>(
      `llm schema, strict: ${strict}`,
      expected,
      converted.success ? converted.value : converted.error,
    );
  }

  // COVERS
  const open: OpenApi.IJsonSchema = { type: "array", items: {} };
  TestEquality.equals(
    "covers",
    [true, true],
    [
      OpenApiTypeChecker.covers({ components: {}, x: open, y: bare }),
      OpenApiTypeChecker.covers({ components: {}, x: bare, y: open }),
    ],
  );

  // HTTP MIGRATION
  const migrated = HttpMigration.application({
    openapi: "3.1.0",
    info: { title: "items omitted", version: "1.0.0" },
    components: { schemas: {} },
    paths: {
      "/tags": {
        get: {
          parameters: [
            {
              name: "tags",
              in: "query",
              schema: bare,
              required: true,
              style: "pipeDelimited",
              explode: false,
            },
          ],
          responses: { 200: { description: "ok" } },
        },
      },
    },
    "x-samchon-emended-v4": true,
  } as unknown as OpenApi.IDocument);
  TestEquality.equals(
    "pipeDelimited migration",
    { routes: 1, errors: [] as string[][] },
    {
      routes: migrated.routes.length,
      errors: migrated.errors.map((error) => error.messages),
    },
  );
};
