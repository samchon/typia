import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  interface IInput {
    status: Status;
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

  const status = props["status"];
  if (status === undefined) return TestValidator.error("no status");

  // String literal unions use oneOf with const values
  TestValidator.predicate("status is oneOf", () =>
    OpenApiTypeChecker.isOneOf(status),
  );
  if (OpenApiTypeChecker.isOneOf(status)) {
    const values = status.oneOf
      .filter(OpenApiTypeChecker.isConstant)
      .map((s) => s.const);
    TestValidator.predicate("has pending", () => values.includes("pending"));
    TestValidator.predicate("has active", () => values.includes("active"));
    TestValidator.predicate("has completed", () => values.includes("completed"));
    TestValidator.equals("enum count", values.length, 3);
  }
};
