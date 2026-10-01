import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion. The case documents its purpose as: Verifies LLM parameters keep empty object shell fields in every mode.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Function-calling parameter schemas are object shells even when there are no named properties. Default and strict generation both have to carry `properties: {}`, `required: []`, and `additionalProperties: false`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The case owns the single scenario its assertions describe. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_empty_required is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
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
