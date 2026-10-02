import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies langchain structured output basic against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts typeof parameters,
 * parse.success, parse.data.name, parse.data.age, validate.success.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification A native structured-output factory provides object parameters, parses string age 30 into numeric 30 with John preserved and accepts a valid member.
 * @evidence contracts/testing.md#independent-expectations Authored member types and JSON literals define the expected parse/coercion data; typeof object does not independently prove SDK assignability.
 * @evidence contracts/testing.md#distinguishing-cases Parse/coercion and valid validation are checked; malformed and missing values belong to the structured-output validation sibling.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_structured_output_basic through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary A native structured-output factory provides object parameters, parses string age 30 into numeric 30 with John preserved and accepts a valid member. The actual native-produced structured-output callbacks execute on authored values; a direct portable coercer cannot establish reflection and callback assembly. This case does not instantiate a LangChain model or call withStructuredOutput.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Parse/coercion and valid validation are checked; malformed and missing values belong to the structured-output validation sibling. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_structured_output_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  // parameters is directly assignable to Record<string, any>
  // so it can be passed to model.withStructuredOutput() as-is
  TestEquality.equals("typeof parameters", typeof output.parameters, "object");

  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.name", parsed.data.name, "John");
    TestEquality.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);
};
