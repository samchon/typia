import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_json_schema_array = (): void => {
  const unit = typia.json.schema<string[]>();
  const schema = unit.schema;

  TestValidator.predicate("is array type", () =>
    OpenApiTypeChecker.isArray(schema),
  );

  if (OpenApiTypeChecker.isArray(schema)) {
    TestValidator.predicate("items is string", () =>
      OpenApiTypeChecker.isString(schema.items),
    );
  }

  // array with constraints
  const constrainedUnit = typia.json.schema<
    string[] & tags.MinItems<1> & tags.MaxItems<10>
  >();
  const constrained = constrainedUnit.schema;
  if (OpenApiTypeChecker.isArray(constrained)) {
    TestValidator.equals("minItems", constrained.minItems, 1);
    TestValidator.equals("maxItems", constrained.maxItems, 10);
  }

  // unique items
  const uniqueUnit = typia.json.schema<
    (string & tags.Format<"uuid">)[] & tags.UniqueItems
  >();
  const unique = uniqueUnit.schema;
  if (OpenApiTypeChecker.isArray(unique)) {
    TestValidator.equals("uniqueItems", unique.uniqueItems, true);
  }
};
