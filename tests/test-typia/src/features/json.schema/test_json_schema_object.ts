import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_object = (): void => {
  interface INested {
    value: number;
  }
  interface IInput {
    name: string;
    nested: INested;
    optional?: string;
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

  const name = props["name"];
  const nested = props["nested"];
  const optional = props["optional"];

  if (name === undefined) return TestValidator.error("no name");
  if (nested === undefined) return TestValidator.error("no nested");

  TestValidator.predicate("name is string", () =>
    OpenApiTypeChecker.isString(name),
  );

  // nested is $ref to INested
  TestValidator.predicate("nested is reference", () =>
    OpenApiTypeChecker.isReference(nested),
  );

  // Check required fields
  const required = actual.required ?? [];
  TestValidator.predicate("name is required", () => required.includes("name"));
  TestValidator.predicate("nested is required", () =>
    required.includes("nested"),
  );

  // optional should exist but not be required
  if (optional !== undefined) {
    TestValidator.predicate("optional is not required", () =>
      !required.includes("optional"),
    );
  }
};
