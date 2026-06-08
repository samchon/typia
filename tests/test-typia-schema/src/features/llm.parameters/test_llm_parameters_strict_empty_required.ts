import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies strict LLM parameters keep an empty `required` array.
 *
 * Function-calling parameter schemas are always object shells. When a strict
 * empty parameter object is generated from TypeScript, it still has to carry
 * `properties: {}`, `required: []`, and `additionalProperties: false`.
 *
 * 1. Generate strict parameters for an empty object interface.
 * 2. Read only the object-shell fields.
 * 3. Assert the strict empty shell is explicit.
 */
export const test_llm_parameters_strict_empty_required = (): void => {
  interface IStrictEmptyParameters {}

  const parameters = typia.llm.parameters<
    IStrictEmptyParameters,
    { strict: true }
  >();

  TestValidator.equals(
    "strict empty parameters",
    {
      type: parameters.type,
      properties: parameters.properties,
      required: parameters.required,
      additionalProperties: parameters.additionalProperties,
    },
    {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  );
};
