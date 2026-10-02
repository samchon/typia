import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies IMember retains its named reference/component, three property keys
 * and optional email metadata.
 *
 * Native interface/property extraction must connect a runtime metadata
 * reference with the emitted named component.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that IMember retains its named reference/component, three property keys and optional email metadata.
 * @evidence contracts/testing.md#independent-expectations The interface declaration supplies IMember, id/name/email and email optionality as fixed independent expectations.
 * @evidence contracts/testing.md#distinguishing-cases Named reference/component counts, every property name and optional-email flag remain; requiredness/atomic field details not asserted here are not certified.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_object in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native interface/property extraction must connect a runtime metadata reference with the emitted named component. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Named reference/component counts, every property name and optional-email flag remain; requiredness/atomic field details not asserted here are not certified. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
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
