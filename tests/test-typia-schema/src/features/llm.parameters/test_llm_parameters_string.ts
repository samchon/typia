import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_parameters_string = (): void => {
  interface IInput {
    basic: string;
    email: string & tags.Format<"email">;
    pattern: string & tags.Pattern<"^[a-z]+$">;
    length: string & tags.MinLength<1> & tags.MaxLength<100>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  // parameters should be object with additionalProperties: false
  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestValidator.equals("additionalProperties", params.additionalProperties, false);
  TestValidator.predicate("has $defs", () => params.$defs !== undefined);

  // check properties exist
  TestValidator.predicate("has basic", () => "basic" in params.properties);
  TestValidator.predicate("has email", () => "email" in params.properties);
  TestValidator.predicate("has pattern", () => "pattern" in params.properties);
  TestValidator.predicate("has length", () => "length" in params.properties);

  // all should be required
  TestValidator.predicate("basic is required", () =>
    params.required?.includes("basic") ?? false,
  );
  TestValidator.predicate("email is required", () =>
    params.required?.includes("email") ?? false,
  );

  // check basic string
  const basic = params.properties["basic"];
  TestValidator.predicate("basic is string", () =>
    LlmTypeChecker.isString(basic!),
  );

  // check email format
  const email = params.properties["email"];
  TestValidator.predicate("email is string", () =>
    LlmTypeChecker.isString(email!),
  );
  if (LlmTypeChecker.isString(email!)) {
    TestValidator.equals("email format", email.format, "email");
  }

  // check pattern
  const pattern = params.properties["pattern"];
  if (LlmTypeChecker.isString(pattern!)) {
    TestValidator.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // check length constraints
  const length = params.properties["length"];
  if (LlmTypeChecker.isString(length!)) {
    TestValidator.equals("minLength", length.minLength, 1);
    TestValidator.equals("maxLength", length.maxLength, 100);
  }
};
