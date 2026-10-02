import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies vercel structured output validate against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts valid.success,
 * invalid.success, missing.success.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts native IMember parameters and checks valid Alice28, nonnumeric Bob age and missing Charlie age verdicts.
 * @evidence contracts/testing.md#independent-expectations The declared required numeric age independently establishes true,false,false for the three handwritten inputs.
 * @evidence contracts/testing.md#distinguishing-cases Valid, wrong-type and missing required property differ by one field; this case does not claim SDK provider execution, which generate_object owns.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_structured_output_validate in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_structured_output_validate = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IMember>();
  toVercelSchema(output.parameters); // ensure schema conversion works

  // Valid input
  const valid = output.validate({ name: "Alice", age: 28 });
  TestEquality.equals("valid.success", valid.success, true);

  // Invalid input (wrong type)
  const invalid = output.validate({ name: "Bob", age: "not-a-number" });
  TestEquality.equals("invalid.success", invalid.success, false);

  // Missing property
  const missing = output.validate({ name: "Charlie" });
  TestEquality.equals("missing.success", missing.success, false);
};
