import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_nullable = (): void => {
  interface IInput {
    nullable: string | null;
    required: string;
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

  const nullable = props["nullable"];
  const required = props["required"];

  if (nullable === undefined) return TestValidator.error("no nullable");
  if (required === undefined) return TestValidator.error("no required");

  // nullable is oneOf with null
  TestValidator.predicate("nullable is oneOf", () =>
    OpenApiTypeChecker.isOneOf(nullable),
  );
  if (OpenApiTypeChecker.isOneOf(nullable)) {
    const hasString = nullable.oneOf.some((s) => OpenApiTypeChecker.isString(s));
    const hasNull = nullable.oneOf.some((s) => OpenApiTypeChecker.isNull(s));
    TestValidator.predicate("has string in oneOf", () => hasString);
    TestValidator.predicate("has null in oneOf", () => hasNull);
  }

  TestValidator.predicate("required is string", () =>
    OpenApiTypeChecker.isString(required),
  );
};
