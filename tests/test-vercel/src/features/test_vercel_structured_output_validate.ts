import { TestValidator } from "@nestia/e2e";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

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
