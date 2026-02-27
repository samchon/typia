import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_object = (): void => {
  interface INested {
    value: number;
  }
  interface IInput {
    name: string;
    nested: INested;
    optional?: string;
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

  const name = props["name"];
  const nested = props["nested"];

  if (name === undefined) return TestValidator.error("no name");
  if (nested === undefined) return TestValidator.error("no nested");

  TestValidator.predicate("name is string", () => LlmTypeChecker.isString(name));

  // nested is $ref to INested
  TestValidator.predicate("nested is reference", () =>
    LlmTypeChecker.isReference(nested),
  );

  // Check required fields
  const required = actual.required ?? [];
  TestValidator.predicate("name is required", () => required.includes("name"));
  TestValidator.predicate("nested is required", () =>
    required.includes("nested"),
  );

  // INested should be in $defs
  const nestedKeys = Object.keys($defs).filter((k) => k.includes("INested"));
  TestValidator.predicate("INested in $defs", () => nestedKeys.length > 0);
};
