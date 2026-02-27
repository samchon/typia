import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_boolean = (): void => {
  interface IInput {
    flag: boolean;
    active: boolean;
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

  const flag = props["flag"];
  const active = props["active"];

  if (flag === undefined) return TestValidator.error("no flag");
  if (active === undefined) return TestValidator.error("no active");

  TestValidator.predicate("flag is boolean", () =>
    OpenApiTypeChecker.isBoolean(flag),
  );
  TestValidator.predicate("active is boolean", () =>
    OpenApiTypeChecker.isBoolean(active),
  );
};
