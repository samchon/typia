import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies union conversion preserves four referenced geometry alternatives.
 *
 * Losing a referenced branch changes the discriminated geometry population even
 * if the converter still reports success.
 *
 * 1. Convert an authored OpenAPI four-variant union with its original
 *    point/line/triangle/rectangle fields.
 * 2. Retain success, exact alternative count and every independently expected
 *    discriminator literal, then compare all four exact references and their
 *    mapping.
 *
 */
export const test_llm_schema_oneof = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {
        IPoint: {
          type: "object",
          properties: {
            type: {
              const: "point",
            },
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["type", "x", "y"],
        },
        ILine: {
          type: "object",
          properties: {
            type: {
              const: "line",
            },
            p1: {
              $ref: "#/components/schemas/IPoint",
            },
            p2: {
              $ref: "#/components/schemas/IPoint",
            },
          },
          required: ["type", "p1", "p2"],
        },
        ITriangle: {
          type: "object",
          properties: {
            type: {
              const: "triangle",
            },
            p1: {
              $ref: "#/components/schemas/IPoint",
            },
            p2: {
              $ref: "#/components/schemas/IPoint",
            },
            p3: {
              $ref: "#/components/schemas/IPoint",
            },
          },
          required: ["type", "p1", "p2", "p3"],
        },
        IRectangle: {
          type: "object",
          properties: {
            type: {
              const: "rectangle",
            },
            p1: {
              $ref: "#/components/schemas/IPoint",
            },
            p2: {
              $ref: "#/components/schemas/IPoint",
            },
            p3: {
              $ref: "#/components/schemas/IPoint",
            },
            p4: {
              $ref: "#/components/schemas/IPoint",
            },
          },
          required: ["type", "p1", "p2", "p3", "p4"],
        },
      },
    },
    schemas: [
      {
        oneOf: [
          {
            $ref: "#/components/schemas/IPoint",
          },
          {
            $ref: "#/components/schemas/ILine",
          },
          {
            $ref: "#/components/schemas/ITriangle",
          },
          {
            $ref: "#/components/schemas/IRectangle",
          },
        ],
        discriminator: {
          propertyName: "type",
          mapping: {
            point: "#/components/schemas/IPoint",
            line: "#/components/schemas/ILine",
            triangle: "#/components/schemas/ITriangle",
            rectangle: "#/components/schemas/IRectangle",
          },
        },
      },
    ],
  };

  const $defs: Record<string, ILlmSchema> = {};
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      $defs,
      components: collection.components,
      schema: collection.schemas[0]!,
    });
  TestValidator.predicate("success", result.success);
  TestValidator.predicate("anyOf length", () => {
    const anyOf = (result as any)?.value?.anyOf;
    return Array.isArray(anyOf) && anyOf.length === 4;
  });
  TestEquality.equals(
    "types",
    ["point", "line", "triangle", "rectangle"],
    Object.values($defs)
      .map((def: any) => def.properties?.type?.enum?.[0])
      .filter(Boolean)
      .sort((a: string, b: string) => {
        const order = ["point", "line", "triangle", "rectangle"];
        return order.indexOf(a) - order.indexOf(b);
      }),
  );

  if (result.success) {
    const union = result.value as ILlmSchema.IAnyOf;
    TestEquality.equals(
      "referenced geometry alternatives",
      union.anyOf.map((branch) => (branch as ILlmSchema.IReference).$ref),
      [
        "#/$defs/IPoint",
        "#/$defs/ILine",
        "#/$defs/ITriangle",
        "#/$defs/IRectangle",
      ],
    );
    TestEquality.equals(
      "geometry discriminator mapping",
      union["x-discriminator"],
      {
        propertyName: "type",
        mapping: {
          point: "#/$defs/IPoint",
          line: "#/$defs/ILine",
          triangle: "#/$defs/ITriangle",
          rectangle: "#/$defs/IRectangle",
        },
      },
    );
  }
};
