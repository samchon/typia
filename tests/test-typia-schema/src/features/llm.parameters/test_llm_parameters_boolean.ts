import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

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
