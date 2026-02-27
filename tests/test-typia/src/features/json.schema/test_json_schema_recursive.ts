import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_recursive = (): void => {
  interface ICategory {
    name: string;
    children: ICategory[];
  }

  const unit = typia.json.schema<ICategory>();
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
  const children = props["children"];

  if (name === undefined) return TestValidator.error("no name");
  if (children === undefined) return TestValidator.error("no children");

  TestValidator.predicate("name is string", () =>
    OpenApiTypeChecker.isString(name),
  );
  TestValidator.predicate("children is array", () =>
    OpenApiTypeChecker.isArray(children),
  );

  // Check recursive reference
  if (OpenApiTypeChecker.isArray(children)) {
    TestValidator.predicate("children items is reference", () =>
      OpenApiTypeChecker.isReference(children.items),
    );
    // The $ref should point back to ICategory
    if (OpenApiTypeChecker.isReference(children.items)) {
      TestValidator.predicate("recursive reference", () =>
        children.items.$ref.includes("ICategory"),
      );
    }
  }
};
