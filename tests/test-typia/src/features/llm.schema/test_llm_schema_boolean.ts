import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_boolean = (): void => {
  interface IInput {
    flag: boolean;
    active: boolean;
  }

  const $defs: Record<string, unknown> = {};
  const schema = typia.llm.schema<IInput, "chatgpt">($defs);

  TestValidator.predicate("is reference", () => LlmTypeChecker.isReference(schema));

  const refName = (schema as { $ref: string }).$ref.replace("#/$defs/", "");
  const actual = $defs[refName];
  if (actual === undefined) return TestValidator.error("schema not in $defs");
  if (!LlmTypeChecker.isObject(actual))
    return TestValidator.error("not object");

  const props = actual.properties;
  if (props === undefined) return TestValidator.error("no properties");

  const flag = props["flag"];
  const active = props["active"];

  if (flag === undefined) return TestValidator.error("no flag");
  if (active === undefined) return TestValidator.error("no active");

  TestValidator.predicate("flag is boolean", () => LlmTypeChecker.isBoolean(flag));
  TestValidator.predicate("active is boolean", () => LlmTypeChecker.isBoolean(active));
};
