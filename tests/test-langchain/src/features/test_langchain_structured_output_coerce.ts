import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies that `ILlmStructuredOutput.coerce` converts string numerics to the
 * declared types.
 *
 * Locks the coercion branch of `ILlmStructuredOutput`. LLMs frequently return
 * numbers as JSON strings; `coerce` must silently convert them to their
 * declared numeric type without a validation error so downstream code receives
 * a fully-typed object.
 *
 * 1. Call `typia.llm.structuredOutput<IInput>()` for a type with number fields.
 * 2. Call `output.coerce` with string-valued numeric fields.
 * 3. Assert each coerced field equals the expected numeric value.
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

  TestValidator.equals("name", coerced.name, "Bob");
  TestValidator.equals("age", coerced.age, 42);
  TestValidator.equals("score", coerced.score, 95.5);
};
