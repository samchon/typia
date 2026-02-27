import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_array = (): void => {
  interface IInput {
    basic: string[];
    constrained: number[] & tags.MinItems<1> & tags.MaxItems<10>;
    unique: string[] & tags.UniqueItems;
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
  const constrained = props["constrained"];
  const unique = props["unique"];

  if (basic === undefined) return TestValidator.error("no basic");
  if (constrained === undefined) return TestValidator.error("no constrained");
  if (unique === undefined) return TestValidator.error("no unique");

  TestValidator.predicate("basic is array", () =>
    OpenApiTypeChecker.isArray(basic),
  );
  if (OpenApiTypeChecker.isArray(basic)) {
    TestValidator.predicate("basic items is string", () =>
      OpenApiTypeChecker.isString(basic.items),
    );
  }

  TestValidator.predicate("constrained is array", () =>
    OpenApiTypeChecker.isArray(constrained),
  );
  if (OpenApiTypeChecker.isArray(constrained)) {
    TestValidator.equals("minItems", constrained.minItems, 1);
    TestValidator.equals("maxItems", constrained.maxItems, 10);
  }

  TestValidator.predicate("unique is array", () =>
    OpenApiTypeChecker.isArray(unique),
  );
  if (OpenApiTypeChecker.isArray(unique)) {
    TestValidator.equals("uniqueItems", unique.uniqueItems, true);
  }
};
