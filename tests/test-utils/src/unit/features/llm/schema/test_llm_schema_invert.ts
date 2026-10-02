import { OpenApi } from "@typia/interface";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies direct inversion preserves each supported constraint-bearing kind.
 *
 * An inverter must preserve non-strict constraint keywords while translating
 * nested LLM schemas to OpenAPI. An integer fixture repeated under a number
 * label cannot distinguish the numeric kind.
 *
 * 1. Invert independently authored string, integer, number, array and object
 *    schemas with the original constraints.
 * 2. Retain each original constraint comparison and add strict descriptor
 *    restoration with an ordinary-prose control.
 *
 */
export const test_llm_schema_invert = (): void => {
  const validate = (title: string, schema: ILlmSchema): void => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      components: {},
      $defs: {},
      schema,
    });
    TestEquality.equals(
      title,
      schema,
      inverted as any,
      (key) => key === "description",
    );
  };

  validate("string", {
    type: "string",
    format: "uri",
    contentMediaType: "image/*",
    minLength: 0,
    maxLength: 128,
  });
  validate("integer", {
    type: "integer",
    exclusiveMinimum: 0,
    exclusiveMaximum: 100,
    multipleOf: 5,
    default: 5,
  });
  validate("number", {
    type: "number",
    exclusiveMinimum: 0,
    exclusiveMaximum: 100,
    multipleOf: 5,
    default: 5,
  });

  validate("array", {
    type: "array",
    items: {
      type: "string",
      pattern: "*",
    },
    uniqueItems: true,
  });
  validate("object", {
    type: "object",
    properties: {
      array: {
        type: "array",
        items: {
          type: "string",
          pattern: "*",
        },
        description:
          "List of items.\n\nList of items containing any string values.",
      },
    },
    required: ["array"],
  });

  const described: ILlmSchema = {
    type: "number",
    description: "Numeric amount.\n\n@minimum 2\n@default 3",
  };
  const strict = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    $defs: {},
    schema: described,
  });
  TestEquality.equals(
    "strict descriptor constraints",
    JSON.parse(JSON.stringify(strict)),
    { type: "number", description: "Numeric amount.", minimum: 2, default: 3 },
  );
  const ordinary = LlmSchemaConverter.invert({
    config: { strict: false },
    components: {},
    $defs: {},
    schema: described,
  });
  TestEquality.equals(
    "ordinary descriptor remains prose",
    JSON.parse(JSON.stringify(ordinary)),
    {
      type: "number",
      description: "Numeric amount.\n\n@minimum 2\n@default 3",
    },
  );
};
