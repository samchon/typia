import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies vercel structured output basic against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts typeof schema,
 * parse.success, parse.data.name, parse.data.age, validate.success.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts native IMember parameters to an SDK Schema object, parses a JSON age string30 and checks John/30 plus valid Jane25 validation.
 * @evidence contracts/testing.md#independent-expectations Handwritten JSON and IMember name:string/age:number establish the parsed values; typeof schema only establishes adapter representation, not its full shape.
 * @evidence contracts/testing.md#distinguishing-cases Successful parse and validation exercise the assembly; structured_output_validate supplies missing-property and nonnumeric-value rejection.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_structured_output_basic in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The native structured-output harness must wire parse/coercion and validation for authored IMember fields; converted schema carrier existence is checked only as representation. This owns raw-JSON parsing, unlike direct coerce and invalid-input siblings.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_structured_output_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();
  const schema = toVercelSchema(output.parameters);

  // Check schema exists
  TestEquality.equals("typeof schema", typeof schema, "object");

  // Structured output utilities come from ILlmStructuredOutput directly
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.name", parsed.data.name, "John");
    TestEquality.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);
};
