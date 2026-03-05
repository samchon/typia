import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_json_schema_string = (): void => {
  const unit = typia.json.schema<string>();
  const schema = unit.schema;

  TestValidator.predicate("is string type", () =>
    OpenApiTypeChecker.isString(schema),
  );

  // string with format
  const emailUnit = typia.json.schema<string & tags.Format<"email">>();
  const email = emailUnit.schema;
  TestValidator.predicate("email is string", () =>
    OpenApiTypeChecker.isString(email),
  );
  if (OpenApiTypeChecker.isString(email)) {
    TestValidator.equals("email format", email.format, "email");
  }

  // string with pattern
  const patternUnit = typia.json.schema<string & tags.Pattern<"^[a-z]+$">>();
  const pattern = patternUnit.schema;
  TestValidator.predicate("pattern is string", () =>
    OpenApiTypeChecker.isString(pattern),
  );
  if (OpenApiTypeChecker.isString(pattern)) {
    TestValidator.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrainedUnit = typia.json.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >();
  const constrained = constrainedUnit.schema;
  if (OpenApiTypeChecker.isString(constrained)) {
    TestValidator.equals("minLength", constrained.minLength, 1);
    TestValidator.equals("maxLength", constrained.maxLength, 100);
  }
};
