import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema object against the native typia.reflect.schema
 * output.
 *
 * The case builds its input in this file and asserts objects length, object
 * name, components objects length, object name in components, properties count,
 * has id property.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (objects length; object name; components objects length; object name in components; properties count; has id property).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (objects length; object name; components objects length; object name in components; properties count; has id property) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const unit = typia.reflect.schema<IMember>();

  // schema has objects reference
  TestEquality.equals("objects length", unit.schema.objects.length, 1);
  TestEquality.equals("object name", unit.schema.objects[0]?.name, "IMember");

  // components has object definition
  TestEquality.equals(
    "components objects length",
    unit.components.objects.length,
    1,
  );

  const obj = unit.components.objects[0];
  if (obj === undefined) return;

  TestEquality.equals("object name in components", obj.name, "IMember");
  TestEquality.equals("properties count", obj.properties.length, 3);

  // check property names
  const propNames = obj.properties.map((p) => {
    const key = p.key;
    if (key.constants.length > 0 && key.constants[0]?.type === "string") {
      return key.constants[0].values[0]?.value;
    }
    return undefined;
  });

  TestValidator.predicate("has id property", () => propNames.includes("id"));
  TestValidator.predicate("has name property", () =>
    propNames.includes("name"),
  );
  TestValidator.predicate("has email property", () =>
    propNames.includes("email"),
  );

  // check optional property
  const emailProp = obj.properties.find((p) => {
    const key = p.key;
    if (key.constants.length > 0 && key.constants[0]?.type === "string") {
      return key.constants[0].values[0]?.value === "email";
    }
    return false;
  });

  TestValidator.predicate(
    "email is optional",
    () => emailProp?.value.optional === true,
  );
};
