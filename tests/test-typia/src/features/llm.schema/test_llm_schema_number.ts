import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_number = (): void => {
  interface IInput {
    basic: number;
    int32: number & tags.Type<"int32">;
    range: number & tags.Minimum<0> & tags.Maximum<100>;
    multipleOf: number & tags.MultipleOf<5>;
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
  const int32 = props["int32"];
  const range = props["range"];
  const multipleOf = props["multipleOf"];

  if (basic === undefined) return TestValidator.error("no basic");
  if (int32 === undefined) return TestValidator.error("no int32");
  if (range === undefined) return TestValidator.error("no range");
  if (multipleOf === undefined) return TestValidator.error("no multipleOf");

  TestValidator.predicate("basic is number", () => LlmTypeChecker.isNumber(basic));
  TestValidator.predicate("int32 is integer", () => LlmTypeChecker.isInteger(int32));

  TestValidator.predicate("range is number", () => LlmTypeChecker.isNumber(range));
  if (LlmTypeChecker.isNumber(range)) {
    TestValidator.equals("minimum", range.minimum, 0);
    TestValidator.equals("maximum", range.maximum, 100);
  }

  TestValidator.predicate("multipleOf is number", () =>
    LlmTypeChecker.isNumber(multipleOf),
  );
  if (LlmTypeChecker.isNumber(multipleOf)) {
    TestValidator.equals("multipleOf value", multipleOf.multipleOf, 5);
  }
};
