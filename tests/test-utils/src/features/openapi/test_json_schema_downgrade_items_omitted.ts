import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3, OpenApiV3_1, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an array schema without `items` downgrades to an open `any[]`.
 *
 * The emended `IArray` type demands `items`, but a hand written or externally
 * parsed emended document can still omit it, and every downgrade target
 * requires the keyword. Dereferencing the missing schema threw before, so the
 * downgraders now emit the empty schema that means "any element".
 *
 * 1. Downgrade a bare `{ type: "array" }` to Swagger v2.0 and OpenAPI v3.0/v3.1.
 * 2. Require each target to emit the open `items: {}` array form.
 * 3. Require a present `items` to survive untouched beside the omitted case.
 */
export const test_json_schema_downgrade_items_omitted = (): void => {
  const open: OpenApi.IJsonSchema = {
    type: "array",
  } as unknown as OpenApi.IJsonSchema;

  const v20: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "2.0",
    components: {},
    downgraded: {},
    schema: open,
  });
  TestValidator.equals("v2.0 open array", v20, {
    type: "array",
    items: {},
  } as any);

  const v30: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: {},
    downgraded: {},
    schema: open,
  });
  TestValidator.equals("v3.0 open array", v30, {
    type: "array",
    items: {},
  } as any);

  const v31: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.1",
    components: {},
    downgraded: {},
    schema: open,
  });
  TestValidator.equals("v3.1 open array", v31, {
    type: "array",
    items: {},
  } as any);

  const constrained: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: {},
    downgraded: {},
    schema: {
      type: "array",
      items: { type: "string" },
    },
  });
  TestValidator.equals("present items survive", constrained, {
    type: "array",
    items: { type: "string" },
  } as any);
};
