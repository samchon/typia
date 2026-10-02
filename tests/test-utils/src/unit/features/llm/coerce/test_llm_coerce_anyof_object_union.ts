import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IObjectA {
  type: "a";
  valueA: number;
}

interface IObjectB {
  type: "b";
  valueB: string;
}

interface IObjectUnion {
  data: IObjectA | IObjectB;
}

/**
 * Verifies schema-directed coercion for anyof object union.
 *
 * This case checks that the referenced a variant preserves its discriminator
 * and numeric value after whole-member parsing. Authored schema input isolates
 * utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_anyof_object_union = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        anyOf: [
          {
            $ref: "#/$defs/IObjectA",
          },
          {
            $ref: "#/$defs/IObjectB",
          },
        ],
        "x-discriminator": {
          propertyName: "type",
          mapping: {
            a: "#/$defs/IObjectA",
            b: "#/$defs/IObjectB",
          },
        },
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {
      IObjectA: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["a"],
          },
          valueA: {
            type: "number",
          },
        },
        required: ["type", "valueA"],
        additionalProperties: false,
      },
      IObjectB: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["b"],
          },
          valueB: {
            type: "string",
          },
        },
        required: ["type", "valueB"],
        additionalProperties: false,
      },
    },
  };
  const original: IObjectUnion = {
    data: { type: "a", valueA: 123 },
  };

  const corrupted = {
    data: JSON.stringify(original.data) as unknown,
  };

  const result = LlmJson.parse<IObjectUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    const data = result.data.data as IObjectA;
    TestEquality.equals("type", data.type, "a");
    TestEquality.equals("valueA", data.valueA, 123);
  }
};
