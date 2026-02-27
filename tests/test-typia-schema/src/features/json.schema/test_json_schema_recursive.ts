import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_recursive = (): void => {
  interface ICategory {
    name: string;
    children: ICategory[];
  }

  const unit = typia.json.schema<ICategory>();
  const schema = unit.schema;

  // named type returns $ref
  let actualSchema: OpenApi.IJsonSchema;
  if (OpenApiTypeChecker.isReference(schema)) {
    const categorySchema = unit.components.schemas?.["ICategory"];
    TestValidator.predicate("ICategory exists in components", () =>
      categorySchema !== undefined,
    );
    actualSchema = categorySchema!;
  } else {
    actualSchema = schema;
  }

  TestValidator.predicate("is object type", () =>
    OpenApiTypeChecker.isObject(actualSchema),
  );

  if (OpenApiTypeChecker.isObject(actualSchema)) {
    const obj = actualSchema as OpenApi.IJsonSchema.IObject;
    const props = obj.properties;
    if (props === undefined) return;

    TestValidator.predicate("has name property", () => "name" in props);
    TestValidator.predicate("has children property", () => "children" in props);

    const children = props["children"];
    if (children) {
      TestValidator.predicate("children is array", () =>
        OpenApiTypeChecker.isArray(children),
      );
      if (OpenApiTypeChecker.isArray(children)) {
        // recursive type uses $ref
        TestValidator.predicate("children items is ref", () =>
          OpenApiTypeChecker.isReference(children.items),
        );
      }
    }
  }
};
