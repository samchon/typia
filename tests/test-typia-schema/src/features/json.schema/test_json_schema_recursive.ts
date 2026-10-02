import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies recursive ICategory children remain an array referring to their own
 * component.
 *
 * Native recursive metadata must emit a finite component graph that reconnects
 * the child to its own source type.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert named root, name/children fields and array/reference shape remain;
 *    missing properties now fail and the child reference target is asserted.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that recursive ICategory children remain an array referring to their own component.
 * @evidence contracts/testing.md#independent-expectations The authored self-recursive interface fixes the target #/components/schemas/ICategory; kind alone is insufficient to establish identity.
 * @evidence contracts/testing.md#distinguishing-cases Named root, name/children fields and array/reference shape remain; missing properties now fail and the child reference target is asserted.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_recursive through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native recursive metadata must emit a finite component graph that reconnects the child to its own source type. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Named root, name/children fields and array/reference shape remain; missing properties now fail and the child reference target is asserted. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
    if (props === undefined)
      throw new Error("the recursive object must publish its properties");

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
        if (OpenApiTypeChecker.isReference(children.items))
          TestEquality.equals(
            "children references its own recursive component",
            children.items.$ref,
            "#/components/schemas/ICategory",
          );
      }
    }
  }
};
