import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies missing references retain their complete nested error locations.
 *
 * A reference failure must remain visible at each affected property rather than
 * stopping at the first broken member or accepting a missing definition.
 *
 * 1. Replace the original first, nested input and array-nested references with
 *    absent component names.
 * 2. Retain every exact failure accessor, then restore the valid references and
 *    require conversion success.
 */
export const test_llm_schema_mismatch = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {
        IPoint: {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
        },
        ICircle: {
          type: "object",
          properties: {
            radius: {
              type: "number",
            },
            center: {
              $ref: "#/components/schemas/IPoint",
            },
          },
          required: ["radius", "center"],
        },
        IRectangle: {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/IPoint",
            },
            p2: {
              $ref: "#/components/schemas/IPoint",
            },
          },
          required: ["p1", "p2"],
        },
      },
    },
    schemas: [
      {
        type: "object",
        properties: {
          first: {
            $ref: "#/components/schemas/IPoint",
          },
          second: {
            type: "object",
            properties: {
              input: {
                $ref: "#/components/schemas/ICircle",
              },
            },
            required: ["input"],
          },
          third: {
            type: "array",
            items: {
              type: "object",
              properties: {
                nested: {
                  $ref: "#/components/schemas/IRectangle",
                },
              },
              required: ["nested"],
            },
          },
        },
        required: ["first", "second", "third"],
      },
    ],
  };
  const p = (collection.schemas[0] as OpenApi.IJsonSchema.IObject)
    .properties as any;
  p.first.$ref = "#/components/schemas/IPoint1";
  p.second.properties.input.$ref = "#/components/schemas/ICircle1";
  p.third.items.properties.nested.$ref = "#/components/schemas/IRectangle1";

  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      accessor: "$input",
      components: collection.components,
      schema: collection.schemas[0] as OpenApi.IJsonSchema.IObject,
      $defs: {},
    });
  TestEquality.equals("success", result.success, false);
  TestEquality.equals(
    "errors",
    result.success ? [] : result.error.reasons.map((r) => r.accessor).sort(),
    [
      `$input.properties["first"]`,
      `$input.properties["second"].properties["input"]`,
      `$input.properties["third"].items.properties["nested"]`,
    ].sort(),
  );

  p.first.$ref = "#/components/schemas/IPoint";
  p.second.properties.input.$ref = "#/components/schemas/ICircle";
  p.third.items.properties.nested.$ref = "#/components/schemas/IRectangle";
  const valid = LlmSchemaConverter.schema({
    accessor: "$input",
    components: collection.components,
    schema: collection.schemas[0]!,
    $defs: {},
  });
  TestEquality.equals("valid references accepted", valid.success, true);
};
