import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a string/number/Boolean tuple keeps its reference, component and
 * three ordered element types.
 *
 * Native tuple component emission must preserve position and kind when
 * evaluating the reflection literal.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that a string/number/Boolean tuple keeps its reference, component and three ordered element types.
 * @evidence contracts/testing.md#independent-expectations The authored positional tuple fixes component/reference counts, length and each atomic kind.
 * @evidence contracts/testing.md#distinguishing-cases All six positional assertions remain without sorting elements; homogeneous arrays have their separate array case.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_tuple in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native tuple component emission must preserve position and kind when evaluating the reflection literal. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage All six positional assertions remain without sorting elements; homogeneous arrays have their separate array case. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_tuple = (): void => {
  const unit = typia.reflect.schema<[string, number, boolean]>();

  // schema has tuples reference
  TestEquality.equals("tuples length", unit.schema.tuples.length, 1);

  // components has tuple definition
  TestEquality.equals(
    "components tuples length",
    unit.components.tuples.length,
    1,
  );

  const tuple = unit.components.tuples[0];
  if (tuple === undefined) return;

  TestEquality.equals("tuple elements count", tuple.elements.length, 3);
  TestEquality.equals(
    "first element is string",
    tuple.elements[0]?.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "second element is number",
    tuple.elements[1]?.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "third element is boolean",
    tuple.elements[2]?.atomics[0]?.type,
    "boolean",
  );
};
