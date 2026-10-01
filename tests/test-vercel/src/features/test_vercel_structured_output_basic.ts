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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.structuredOutput is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (typeof schema; parse.success; parse.data.name; parse.data.age; validate.success).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (typeof schema; parse.success; parse.data.name; parse.data.age; validate.success) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_structured_output_basic is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
