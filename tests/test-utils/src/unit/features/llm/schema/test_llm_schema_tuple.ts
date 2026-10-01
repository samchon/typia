import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies tuple rejection reports every nested accessor without rejecting
 * ordinary arrays.
 *
 * LLM schemas cannot represent fixed tuple positions; the error must identify
 * the tuple itself at root, object members and nested array members.
 *
 * 1. Convert authored root, sibling-object and deeply nested tuples with their
 *    original scalar positions.
 * 2. Retain every original failure accessor and contrast an ordinary numeric
 *    array.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.schema rejects all tuple locations and compares exact error accessors; an ordinary array succeeds with independently specified item meaning.
 * @evidence contracts/testing.md#independent-expectations Literal accessor strings follow the authored graph and error contract, not the converter traversal. The private validate helper compares success and sorted accessors.
 * @evidence contracts/testing.md#distinguishing-cases Root tuple, two sibling tuples, nested tuple and an ordinary-array negative twin preserve location and rejection distinctions. Actual native tuple emission remains in JSON schema tuple cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from declared fields rather than generated at execution. Private local helpers remain reviewed through this owning case.
 */
export const test_llm_schema_tuple = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {},
    },
    schemas: [
      {
        type: "array",
        prefixItems: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
        additionalItems: false,
      },
      {
        type: "object",
        properties: {
          input: {
            type: "array",
            prefixItems: [
              {
                type: "boolean",
              },
              {
                type: "string",
              },
            ],
            additionalItems: false,
          },
          output: {
            type: "array",
            prefixItems: [
              {
                type: "number",
              },
              {
                type: "boolean",
              },
            ],
            additionalItems: false,
          },
        },
        required: ["input", "output"],
      },
      {
        type: "array",
        items: {
          type: "object",
          properties: {
            nested: {
              type: "object",
              properties: {
                x: {
                  type: "object",
                  properties: {
                    y: {
                      type: "array",
                      prefixItems: [
                        {
                          type: "string",
                        },
                        {
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                    },
                    z: {
                      type: "number",
                    },
                  },
                  required: ["y", "z"],
                },
                alpha: {
                  type: "array",
                  items: {
                    type: "number",
                  },
                },
              },
              required: ["x", "alpha"],
            },
          },
          required: ["nested"],
        },
      },
    ],
  };
  const v = validate(collection.components);
  v(collection.schemas[0]!)(["$input"]);
  v(collection.schemas[1]!)([
    `$input.properties["input"]`,
    `$input.properties["output"]`,
  ]);
  v(collection.schemas[2]!)([
    `$input.items.properties["nested"].properties["x"].properties["y"]`,
  ]);

  const ordinary = LlmSchemaConverter.schema({
    components: {},
    $defs: {},
    schema: { type: "array", items: { type: "number" } },
  });
  TestEquality.equals(
    "ordinary array accepted",
    ordinary.success ? ordinary.value : null,
    { type: "array", items: { type: "number" } },
  );
};

const validate =
  (components: OpenApi.IComponents) =>
  (schema: OpenApi.IJsonSchema) =>
  (expected: string[]): void => {
    const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
      LlmSchemaConverter.schema({
        accessor: "$input",
        components,
        schema,
        $defs: {},
      });
    TestEquality.equals("success", result.success, false);
    TestEquality.equals(
      "errors",
      result.success ? [] : result.error.reasons.map((r) => r.accessor).sort(),
      expected.sort(),
    );
  };
