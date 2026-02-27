import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_union = (): void => {
  interface IInput {
    value: string | number;
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

  const value = props["value"];
  if (value === undefined) return TestValidator.error("no value");

  // Primitive union uses oneOf
  TestValidator.predicate("value is oneOf", () =>
    OpenApiTypeChecker.isOneOf(value),
  );
  if (OpenApiTypeChecker.isOneOf(value)) {
    const hasString = value.oneOf.some((s) => OpenApiTypeChecker.isString(s));
    const hasNumber = value.oneOf.some((s) => OpenApiTypeChecker.isNumber(s));
    TestValidator.predicate("has string", () => hasString);
    TestValidator.predicate("has number", () => hasNumber);
  }
};
