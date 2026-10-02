import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies langchain structured output coerce against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts name, age, score.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification The native structured-output coerce operation keeps Bob and converts numeric strings to integer 42 and fractional 95.5.
 * @evidence contracts/testing.md#independent-expectations Authored strings and numeric literals define coercion independently of generated schema.
 * @evidence contracts/testing.md#distinguishing-cases String preservation plus integer/fraction conversion are positive distinctions; rejection belongs to the validation sibling.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_structured_output_coerce through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary The native structured-output coerce operation keeps Bob and converts numeric strings to integer 42 and fractional 95.5. The actual native-produced structured-output callbacks execute on authored values; a direct portable coercer cannot establish reflection and callback assembly. This case does not instantiate a LangChain model or call withStructuredOutput.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. String preservation plus integer/fraction conversion are positive distinctions; rejection belongs to the validation sibling. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_structured_output_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();

  const coerced = output.coerce({
    name: "Bob",
    age: "42",
    score: "95.5",
  });

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);
};
