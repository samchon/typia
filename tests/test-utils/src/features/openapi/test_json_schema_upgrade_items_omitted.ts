import { TestValidator } from "@nestia/e2e";
import {
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";
import { OpenApiConverter, OpenApiValidator } from "@typia/utils";

/**
 * Verifies an array schema without `items` upgrades to an open `any[]`.
 *
 * JSON Schema treats an omitted `items` as an empty schema, so `{ "type":
 * "array" }` asserts arrayness alone. Real world documents carry that shape
 * even where Swagger v2.0 and OpenAPI v3.0 demand `items`; those two upgraders
 * used to dereference `undefined` and throw, while the v3.1 upgrader narrowed
 * the schema into an empty tuple that accepts `[]` only.
 *
 * 1. Upgrade a bare `{ type: "array" }` component from every source version.
 * 2. Require each upgrade to emit the open `items: {}` array form.
 * 3. Validate empty, populated, and non-array values against each result.
 * 4. Require a present `items` to survive untouched beside the omitted case.
 */
export const test_json_schema_upgrade_items_omitted = (): void => {
  const versions: [string, OpenApi.IJsonSchema][] = [
    [
      "v2.0",
      upgrade({
        swagger: "2.0",
        definitions: {
          target: { type: "array" } as unknown as SwaggerV2.IJsonSchema,
        },
      }),
    ],
    ["v3.0", upgrade(document<OpenApiV3.IDocument>("3.0.0"))],
    ["v3.1", upgrade(document<OpenApiV3_1.IDocument>("3.1.0"))],
    ["v3.2", upgrade(document<OpenApiV3_2.IDocument>("3.2.0"))],
  ];
  for (const [label, schema] of versions) {
    TestValidator.equals(`${label} open array`, schema, {
      type: "array",
      items: {},
    });
    expectValidation(`${label} accepts empty`, schema, [], true);
    expectValidation(
      `${label} accepts mixed elements`,
      schema,
      [1, "two", { three: true }, null],
      true,
    );
    expectValidation(
      `${label} rejects non-array`,
      schema,
      { length: 0 },
      false,
    );
  }

  const constrained: OpenApi.IJsonSchema = upgrade({
    openapi: "3.0.0",
    components: {
      schemas: {
        target: {
          type: "array",
          items: { type: "string" },
        },
      },
    },
  });
  TestValidator.equals("present items survive", constrained, {
    type: "array",
    items: { type: "string" },
  });
  expectValidation("present items reject numbers", constrained, [1], false);
};

const document = <Document>(openapi: string): Document =>
  ({
    openapi,
    components: {
      schemas: {
        target: { type: "array" },
      },
    },
  }) as Document;

const upgrade = (
  input:
    | SwaggerV2.IDocument
    | OpenApiV3.IDocument
    | OpenApiV3_1.IDocument
    | OpenApiV3_2.IDocument,
): OpenApi.IJsonSchema => {
  const emended: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  const schema: OpenApi.IJsonSchema | undefined =
    emended.components?.schemas?.["target"];
  if (schema === undefined)
    throw new Error("The upgrader dropped the target schema.");
  return schema;
};

const expectValidation = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  success: boolean,
): void =>
  TestValidator.equals(
    label,
    OpenApiValidator.validate({ components: {}, schema, value, required: true })
      .success,
    success,
  );
