import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IBooleanUnion {
  value: boolean | number;
}

interface INullUnion {
  value: null | number;
}

interface IBooleanNullUnion {
  value: boolean | null;
}

/**
 * Verifies schema-directed coercion for boolean string n anyof.
 *
 * This case checks that the same n input becomes false or null with a unique
 * kind, but remains text when both kinds are available. Authored schema input
 * isolates utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_boolean_string_n_anyof = (): void => {
  // "n" -> false when boolean in union, no null
  const boolParams: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        anyOf: [
          {
            type: "boolean",
          },
          {
            type: "number",
          },
        ],
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };
  const boolResult = LlmJson.coerce<IBooleanUnion>(
    { value: "n" as unknown },
    boolParams,
  );
  TestEquality.equals("n -> false (boolean union)", boolResult.value, false);

  // "n" -> null when null in union, no boolean
  const nullParams: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        anyOf: [
          {
            type: "null",
          },
          {
            type: "number",
          },
        ],
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };
  const nullResult = LlmJson.coerce<INullUnion>(
    { value: "n" as unknown },
    nullParams,
  );
  TestEquality.equals("n -> null (null union)", nullResult.value, null);

  // "n" stays as "n" when both boolean and null in union (ambiguous)
  const bothParams: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        anyOf: [
          {
            type: "boolean",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };
  const bothResult = LlmJson.coerce<IBooleanNullUnion>(
    { value: "n" as unknown },
    bothParams,
  );
  TestEquality.equals("n -> n (both union)", bothResult.value as unknown, "n");
};
