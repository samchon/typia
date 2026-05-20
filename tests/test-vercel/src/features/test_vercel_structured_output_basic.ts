import { TestValidator } from "@nestia/e2e";
import { ILlmStructuredOutput } from "@typia/interface";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies the basic `ILlmStructuredOutput` contract for the Vercel adapter.
 *
 * Locks the `toVercelSchema`, `parse`, and `validate` surface for the Vercel
 * integration. `toVercelSchema(output.parameters)` must produce an object
 * schema accepted by the Vercel AI SDK; `parse` must coerce string numbers;
 * `validate` must confirm a valid object.
 *
 * 1. Obtain `ILlmStructuredOutput<IMember>` and convert via `toVercelSchema`.
 * 2. Assert the resulting schema is a non-null object.
 * 3. Call `output.parse` with a JSON string containing a stringified age and
 *    assert coercion.
 * 4. Call `output.validate` with a valid object and assert success.
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
  TestValidator.equals("typeof schema", typeof schema, "object");

  // Structured output utilities come from ILlmStructuredOutput directly
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestValidator.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestValidator.equals("parse.data.name", parsed.data.name, "John");
    TestValidator.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestValidator.equals("validate.success", validated.success, true);
};
