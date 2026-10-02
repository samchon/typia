import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies langchain structured output validate against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts valid.success,
 * invalid.success, missing.success.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification The native structured-output validator accepts a valid member and rejects nonnumeric age and missing required age.
 * @evidence contracts/testing.md#independent-expectations The authored required numeric property and adjacent mutated/missing values define literal success verdicts.
 * @evidence contracts/testing.md#distinguishing-cases Valid, wrong-type and missing-property inputs distinguish three decisions; this case does not assert complete error reports.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_structured_output_validate through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary The native structured-output validator accepts a valid member and rejects nonnumeric age and missing required age. The actual native-produced structured-output callbacks execute on authored values; a direct portable coercer cannot establish reflection and callback assembly. This case does not instantiate a LangChain model or call withStructuredOutput.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Valid, wrong-type and missing-property inputs distinguish three decisions; this case does not assert complete error reports. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_structured_output_validate = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IMember>();

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
