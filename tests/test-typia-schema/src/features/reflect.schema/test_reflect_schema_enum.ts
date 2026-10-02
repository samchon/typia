import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies string and numeric finite domains retain their complete
 * constant-group membership.
 *
 * Native literal-union collection must preserve every source value within its
 * public constant group.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that string and numeric finite domains retain their complete constant-group membership.
 * @evidence contracts/testing.md#independent-expectations Authored red/green/blue and 0/1/2 domains fix values and group kinds independently of reflection output.
 * @evidence contracts/testing.md#distinguishing-cases All original group/count/string membership checks remain, and complete numeric membership now rules out same-size duplicate/wrong values.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_enum in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native literal-union collection must preserve every source value within its public constant group. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage All original group/count/string membership checks remain, and complete numeric membership now rules out same-size duplicate/wrong values. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_enum = (): void => {
  // string enum
  type Color = "red" | "green" | "blue";
  const colorUnit = typia.reflect.schema<Color>();
  TestEquality.equals("constants length", colorUnit.schema.constants.length, 1);
  TestEquality.equals(
    "constant type",
    colorUnit.schema.constants[0]?.type,
    "string",
  );
  TestEquality.equals(
    "values length",
    colorUnit.schema.constants[0]?.values.length,
    3,
  );

  const values =
    colorUnit.schema.constants[0]?.values.map((v) => v.value) ?? [];
  TestValidator.predicate("has red", () => values.includes("red"));
  TestValidator.predicate("has green", () => values.includes("green"));
  TestValidator.predicate("has blue", () => values.includes("blue"));

  // number enum
  type Status = 0 | 1 | 2;
  const statusUnit = typia.reflect.schema<Status>();
  TestEquality.equals(
    "number constants length",
    statusUnit.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "number constant type",
    statusUnit.schema.constants[0]?.type,
    "number",
  );
  TestEquality.equals(
    "number values length",
    statusUnit.schema.constants[0]?.values.length,
    3,
  );
  TestEquality.equals(
    "all declared numeric values survive",
    statusUnit.schema.constants[0]?.values.map((value) => value.value).sort(),
    [0, 1, 2],
  );
};
