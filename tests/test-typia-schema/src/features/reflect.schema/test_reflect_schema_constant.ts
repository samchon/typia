import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies string hello, number 42 and Boolean true each retain one constant
 * group of their declared kind/value.
 *
 * Compiler literal extraction must reach public metadata without turning a
 * literal into an unrestricted atomic.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that string hello, number 42 and Boolean true each retain one constant group of their declared kind/value.
 * @evidence contracts/testing.md#independent-expectations The three literal declarations independently provide fixed values and constant-group counts.
 * @evidence contracts/testing.md#distinguishing-cases Three literal kinds retain all nine assertions; false and mixed-discriminant controls belong to boolean_literal_union.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_constant in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Compiler literal extraction must reach public metadata without turning a literal into an unrestricted atomic. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Three literal kinds retain all nine assertions; false and mixed-discriminant controls belong to boolean_literal_union. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_constant = (): void => {
  // string literal
  const stringLiteral = typia.reflect.schema<"hello">();
  TestEquality.equals(
    "constants length",
    stringLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "constant type",
    stringLiteral.schema.constants[0]?.type,
    "string",
  );
  TestEquality.equals(
    "constant value",
    stringLiteral.schema.constants[0]?.values[0]?.value,
    "hello",
  );

  // number literal
  const numberLiteral = typia.reflect.schema<42>();
  TestEquality.equals(
    "number constants length",
    numberLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "number constant type",
    numberLiteral.schema.constants[0]?.type,
    "number",
  );
  TestEquality.equals(
    "number constant value",
    numberLiteral.schema.constants[0]?.values[0]?.value,
    42,
  );

  // boolean literal
  const booleanLiteral = typia.reflect.schema<true>();
  TestEquality.equals(
    "boolean constants length",
    booleanLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "boolean constant type",
    booleanLiteral.schema.constants[0]?.type,
    "boolean",
  );
  TestEquality.equals(
    "boolean constant value",
    booleanLiteral.schema.constants[0]?.values[0]?.value,
    true,
  );
};
