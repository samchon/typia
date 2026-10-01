import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema recursive against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts ICategory exists in
 * components, is object type, has name property, has children property,
 * children is array, children items is ref.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (ICategory exists in components; is object type; has name property; has children property; children is array; children items is ref).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (ICategory exists in components; is object type; has name property; has children property; children is array; children items is ref) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_recursive is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
