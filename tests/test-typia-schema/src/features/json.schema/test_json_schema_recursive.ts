import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies that `typia.json.schema` handles a self-referential type by emitting
 * a `$ref`-based cycle.
 *
 * Recursive types must be lifted into `components.schemas` and referenced via
 * `$ref` to avoid infinite expansion. A regression in the recursion guard would
 * either stack-overflow at compile time or emit an infinitely nested inline
 * schema that exceeds JSON size limits.
 *
 * 1. Define `ICategory` with a `children: ICategory[]` self-reference.
 * 2. Call `typia.json.schema<ICategory>()` and resolve any root `$ref`.
 * 3. Assert the resolved schema is an object, and that `children.items` is a
 *    `$ref`.
 */
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
    TestValidator.predicate(
      "ICategory exists in components",
      () => categorySchema !== undefined,
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
    TestValidator.predicate("object has properties", () => props !== undefined);
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
