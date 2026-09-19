import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
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
    TestEquality.equals("minItems", constrained.minItems, 1);
    TestEquality.equals("maxItems", constrained.maxItems, 10);
  }

  // unique items
  const uniqueUnit = typia.json.schema<
    (string & tags.Format<"uuid">)[] & tags.UniqueItems
  >();
  const unique = uniqueUnit.schema;
  if (OpenApiTypeChecker.isArray(unique)) {
    TestEquality.equals("uniqueItems", unique.uniqueItems, true);
  }
};
