import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies vercel structured output coerce against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts name, age, score.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts native IInput parameters, then checks Bob plus coercion of age42 and score95.5 from authored strings.
 * @evidence contracts/testing.md#independent-expectations The input literals determine integer and fractional numeric values; name must retain its original string.
 * @evidence contracts/testing.md#distinguishing-cases Integer and fractional strings differ from an unchanged string; structured_output_validate covers values that cannot satisfy the declared type.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_structured_output_coerce in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The native-produced harness must connect authored integer/fractional fields to coercion while preserving the name string. The adapter call only checks that schema conversion does not throw; generate_object owns actual SDK carrier consumption.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_structured_output_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();
  toVercelSchema(output.parameters); // ensure schema conversion works

  // Test coerce from ILlmStructuredOutput directly
  const coerced = output.coerce({
    name: "Bob",
    age: "42",
    score: "95.5",
  });

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);
};
