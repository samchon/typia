import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_string = (): void => {
  interface IInput {
    basic: string;
    email: string & tags.Format<"email">;
    pattern: string & tags.Pattern<"^[a-z]+$">;
    length: string & tags.MinLength<1> & tags.MaxLength<100>;
  }

  const unit = typia.json.schema<IInput>();
  const schema = unit.schema;

  TestValidator.predicate("is reference", () =>
    OpenApiTypeChecker.isReference(schema),
  );

  const components = unit.components;
  const refName = (schema as { $ref: string }).$ref.replace(
    "#/components/schemas/",
    "",
  );
  const actual = components.schemas?.[refName];
  if (actual === undefined) return TestValidator.error("schema not found");
  if (!OpenApiTypeChecker.isObject(actual))
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

  TestValidator.predicate("basic is string", () =>
    OpenApiTypeChecker.isString(basic),
  );
  TestValidator.predicate("email is string", () =>
    OpenApiTypeChecker.isString(email),
  );
  if (OpenApiTypeChecker.isString(email)) {
    TestValidator.equals("email format", email.format, "email");
  }

  TestValidator.predicate("pattern is string", () =>
    OpenApiTypeChecker.isString(pattern),
  );
  if (OpenApiTypeChecker.isString(pattern)) {
    TestValidator.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  TestValidator.predicate("length is string", () =>
    OpenApiTypeChecker.isString(length),
  );
  if (OpenApiTypeChecker.isString(length)) {
    TestValidator.equals("minLength", length.minLength, 1);
    TestValidator.equals("maxLength", length.maxLength, 100);
  }
};
