import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies reflect schemas components against the native typia.reflect.schemas
 * output.
 *
 * The case builds its input in this file and asserts schemas count, has IBase,
 * has IChild, IChild is recursive, IChild has parent property.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schemas is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (schemas count; has IBase; has IChild; IChild is recursive; IChild has parent property).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schemas count; has IBase; has IChild; IChild is recursive; IChild has parent property) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schemas_components is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schemas_components = (): void => {
  interface IBase {
    id: number;
  }
  interface IChild extends IBase {
    name: string;
    parent?: IChild;
  }

  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[IBase, IChild]>();

  TestEquality.equals("schemas count", collection.schemas.length, 2);

  // components has both types
  TestValidator.predicate("has IBase", () =>
    collection.components.objects.some((o) => o.name === "IBase"),
  );
  TestValidator.predicate("has IChild", () =>
    collection.components.objects.some((o) => o.name === "IChild"),
  );

  // check recursive type
  const child = collection.components.objects.find((o) => o.name === "IChild");
  TestValidator.predicate(
    "IChild is recursive",
    () => child?.recursive === true,
  );

  // check IChild has parent property
  TestValidator.predicate("IChild has parent property", () => {
    if (!child) return false;
    return child.properties.some((p) => {
      const key = p.key;
      if (key.constants.length > 0 && key.constants[0]?.type === "string") {
        return key.constants[0].values[0]?.value === "parent";
      }
      return false;
    });
  });
};
