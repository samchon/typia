import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_array = (): void => {
  interface IInput {
    basic: string[];
    constrained: number[] & tags.MinItems<1> & tags.MaxItems<10>;
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

  const basic = props["basic"];
  const constrained = props["constrained"];

  if (basic === undefined) return TestValidator.error("no basic");
  if (constrained === undefined) return TestValidator.error("no constrained");

  TestValidator.predicate("basic is array", () => LlmTypeChecker.isArray(basic));
  if (LlmTypeChecker.isArray(basic)) {
    TestValidator.predicate("basic items is string", () =>
      LlmTypeChecker.isString(basic.items),
    );
  }

  TestValidator.predicate("constrained is array", () =>
    LlmTypeChecker.isArray(constrained),
  );
  if (LlmTypeChecker.isArray(constrained)) {
    TestValidator.equals("minItems", constrained.minItems, 1);
    TestValidator.equals("maxItems", constrained.maxItems, 10);
  }
};
