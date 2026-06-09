import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies LLM parameters keep empty object shell fields in every mode.
 *
 * Function-calling parameter schemas are object shells even when there are no
 * named properties. Default and strict generation both have to carry
 * `properties: {}`, `required: []`, and `additionalProperties: false`.
 *
 * 1. Generate default and strict parameters for an empty object interface.
 * 2. Read only the object-shell fields.
 * 3. Assert both empty shells are explicit.
 */
export const test_llm_parameters_empty_required = (): void => {
  interface IEmptyParameters {}

  assertShell(
    "default empty parameters",
    typia.llm.parameters<IEmptyParameters>(),
  );

  assertShell(
    "strict empty parameters",
    typia.llm.parameters<IEmptyParameters, { strict: true }>(),
  );
};

const assertShell = (
  name: string,
  parameters: ILlmSchema.IParameters,
): void => {
  TestValidator.equals(
    name,
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
