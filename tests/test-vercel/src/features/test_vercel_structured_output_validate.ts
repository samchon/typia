import { TestValidator } from "@nestia/e2e";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

/**
 * Verifies that `ILlmStructuredOutput.validate` correctly accepts and rejects
 * values in the Vercel adapter.
 *
 * Locks the validation surface exercised by the Vercel integration.
 * `toVercelSchema` is called to ensure the schema conversion step does not
 * interfere. `validate` must return success for valid input and failure for
 * wrong-type or missing fields.
 *
 * 1. Obtain `ILlmStructuredOutput<IMember>` and call `toVercelSchema` to confirm
 *    conversion.
 * 2. Call `output.validate` with a fully valid object; assert success.
 * 3. Call `output.validate` with a wrong-type field; assert failure.
 * 4. Call `output.validate` with a missing required field; assert failure.
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
  TestValidator.equals("valid.success", valid.success, true);

  // Invalid input (wrong type)
  const invalid = output.validate({ name: "Bob", age: "not-a-number" });
  TestValidator.equals("invalid.success", invalid.success, false);

  // Missing property
  const missing = output.validate({ name: "Charlie" });
  TestValidator.equals("missing.success", missing.success, false);
};
