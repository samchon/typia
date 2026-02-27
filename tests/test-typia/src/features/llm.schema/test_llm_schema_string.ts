import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_string = (): void => {
  interface IInput {
    basic: string;
    email: string & tags.Format<"email">;
    pattern: string & tags.Pattern<"^[a-z]+$">;
    length: string & tags.MinLength<1> & tags.MaxLength<100>;
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
  const email = props["email"];
  const pattern = props["pattern"];
  const length = props["length"];

  if (basic === undefined) return TestValidator.error("no basic");
  if (email === undefined) return TestValidator.error("no email");
  if (pattern === undefined) return TestValidator.error("no pattern");
  if (length === undefined) return TestValidator.error("no length");

  TestValidator.predicate("basic is string", () => LlmTypeChecker.isString(basic));
  TestValidator.predicate("email is string", () => LlmTypeChecker.isString(email));

  TestValidator.predicate("pattern is string", () => LlmTypeChecker.isString(pattern));
  if (LlmTypeChecker.isString(pattern)) {
    TestValidator.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  TestValidator.predicate("length is string", () => LlmTypeChecker.isString(length));
  if (LlmTypeChecker.isString(length)) {
    TestValidator.equals("minLength", length.minLength, 1);
    TestValidator.equals("maxLength", length.maxLength, 100);
  }
};
