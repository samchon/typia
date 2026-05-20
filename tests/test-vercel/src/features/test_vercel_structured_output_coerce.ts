import { TestValidator } from "@nestia/e2e";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies that `ILlmStructuredOutput.coerce` converts string numerics within
 * the Vercel adapter.
 *
 * Locks the coercion path exercised by the Vercel integration. LLMs often
 * return numbers as JSON strings; `coerce` must silently convert them to their
 * declared numeric type. `toVercelSchema` is called first to ensure the schema
 * conversion does not interfere with coercion.
 *
 * 1. Obtain `ILlmStructuredOutput<IInput>` and call `toVercelSchema` to confirm
 *    conversion.
 * 2. Call `output.coerce` with string-valued numeric fields.
 * 3. Assert each coerced field equals the expected numeric value.
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

  TestValidator.equals("name", coerced.name, "Bob");
  TestValidator.equals("age", coerced.age, 42);
  TestValidator.equals("score", coerced.score, 95.5);
};
