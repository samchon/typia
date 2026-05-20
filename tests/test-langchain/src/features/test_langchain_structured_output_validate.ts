import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies that `ILlmStructuredOutput.validate` correctly accepts and rejects
 * values.
 *
 * Locks the validation surface of `ILlmStructuredOutput`. The `validate` method
 * must return `{ success: true }` for well-formed input and `{ success: false
 * }` when a field has the wrong type or is absent — ensuring callers can detect
 * malformed LLM output before acting on it.
 *
 * 1. Call `output.validate` with a fully valid object; assert success.
 * 2. Call `output.validate` with a wrong-type field; assert failure.
 * 3. Call `output.validate` with a missing required field; assert failure.
 */
export const test_langchain_structured_output_validate = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IMember>();

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
