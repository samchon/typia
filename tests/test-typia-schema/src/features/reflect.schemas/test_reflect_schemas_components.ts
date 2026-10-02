import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies base/derived reflection components preserve recursive child metadata
 * and the parent property.
 *
 * Native inheritance and recursion analysis must expose a resolving named
 * metadata collection.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that base/derived reflection components preserve recursive child metadata and the parent property.
 * @evidence contracts/testing.md#independent-expectations Authored IBase and self-referential IChild establish component names, recursive:true and the parent key.
 * @evidence contracts/testing.md#distinguishing-cases Both component names and recursion/parent-key predicates remain; inherited id/name metadata beyond those predicates is not certified.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schemas_components in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native inheritance and recursion analysis must expose a resolving named metadata collection. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Both component names and recursion/parent-key predicates remain; inherited id/name metadata beyond those predicates is not certified. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
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
