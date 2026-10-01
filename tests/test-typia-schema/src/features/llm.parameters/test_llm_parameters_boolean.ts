import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm parameters boolean against the native typia.llm.parameters
 * output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, active is boolean, enabled is boolean, active is
 * required, enabled is required.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (is object; additionalProperties; active is boolean; enabled is boolean; active is required; enabled is required).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; active is boolean; enabled is boolean; active is required; enabled is required) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_boolean is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_boolean = (): void => {
  interface IInput {
    active: boolean;
    enabled: boolean;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check active
  const active = params.properties["active"];
  TestValidator.predicate("active is boolean", () =>
    LlmTypeChecker.isBoolean(active!),
  );

  // check enabled
  const enabled = params.properties["enabled"];
  TestValidator.predicate("enabled is boolean", () =>
    LlmTypeChecker.isBoolean(enabled!),
  );

  // all required
  TestValidator.predicate(
    "active is required",
    () => params.required?.includes("active") ?? false,
  );
  TestValidator.predicate(
    "enabled is required",
    () => params.required?.includes("enabled") ?? false,
  );
};
