import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_tuple = (): void => {
  interface IInput {
    tuple: [string, number, boolean];
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

  const tuple = props["tuple"];
  if (tuple === undefined) return TestValidator.error("no tuple");

  TestValidator.predicate("tuple is tuple", () =>
    OpenApiTypeChecker.isTuple(tuple),
  );
  if (OpenApiTypeChecker.isTuple(tuple)) {
    const items = tuple.prefixItems;
    TestValidator.equals("tuple length", items.length, 3);
    TestValidator.predicate("first is string", () =>
      OpenApiTypeChecker.isString(items[0]!),
    );
    TestValidator.predicate("second is number", () =>
      OpenApiTypeChecker.isNumber(items[1]!),
    );
    TestValidator.predicate("third is boolean", () =>
      OpenApiTypeChecker.isBoolean(items[2]!),
    );
  }
};
