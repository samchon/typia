import { TestValidator } from "@nestia/e2e";
import { ILlmStructuredOutput } from "@typia/interface";
import typia from "typia";

/**
 * Verifies the basic `ILlmStructuredOutput` contract for the LangChain adapter.
 *
 * Locks the `parameters`, `parse`, and `validate` surface of
 * `ILlmStructuredOutput`. The `parameters` field must be an object passable to
 * `model.withStructuredOutput()`; `parse` must coerce string numbers to the
 * declared type; `validate` must confirm a well-formed value succeeds.
 *
 * 1. Call `typia.llm.structuredOutput<IMember>()` to obtain the output helper.
 * 2. Assert `typeof output.parameters === "object"`.
 * 3. Call `output.parse` with a JSON string containing a stringified age.
 * 4. Assert parse succeeds and coerces age to a number.
 * 5. Call `output.validate` with a valid object and assert success.
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
  TestValidator.equals("typeof parameters", typeof output.parameters, "object");

  const parsed = output.parse('{"name":"John","age":"30"}');
  TestValidator.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestValidator.equals("parse.data.name", parsed.data.name, "John");
    TestValidator.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestValidator.equals("validate.success", validated.success, true);
};
