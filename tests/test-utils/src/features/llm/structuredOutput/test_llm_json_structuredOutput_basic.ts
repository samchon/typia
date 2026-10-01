import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IMember {
  name: string;
  age: number;
  email: string;
}

/**
 * Verifies LlmJson.structuredOutput parses, coerces and validates for a native
 * member type.
 *
 * The structured output wrapper must keep its parameters and provide working
 * parse, coerce and validate for the type it was generated from.
 *
 * 1. Generate parameters natively and build the structured output.
 * 2. Parse a valid JSON string and coerce a stringified number.
 * 3. Validate a valid and an invalid value.
 *
 * @evidence contracts/testing.md#behavioral-verification structuredOutput is built from natively generated parameters; parse data, coerced age and validate verdicts are asserted.
 * @evidence contracts/testing.md#independent-expectations Values are authored and the expected coercion of the string 25 to 25 follows the documented behavior.
 * @evidence contracts/testing.md#distinguishing-cases Parse, coerce, valid and invalid validate calls are separate assertions; schema variants are in unit cases.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.parameters is produced by the native transform; the wrapper runs in process.
 */
export const test_llm_json_structuredOutput_basic = (): void => {
  const parameters = typia.llm.parameters<IMember>();
  const output: ILlmStructuredOutput<IMember> =
    LlmJson.structuredOutput<IMember>(parameters);

  // Check that parameters is preserved
  TestEquality.equals("parameters", output.parameters, parameters);

  // Test parse
  const json = JSON.stringify({
    name: "John",
    age: 30,
    email: "john@test.com",
  });
  const parsed = output.parse(json);
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.name", parsed.data.name, "John");
    TestEquality.equals("parse.data.age", parsed.data.age, 30);
  }

  // Test coerce (with stringified number)
  const corrupted = {
    name: "Jane",
    age: "25" as unknown as number,
    email: "jane@test.com",
  };
  const coerced = output.coerce(corrupted as IMember);
  TestEquality.equals("coerce.age", coerced.age, 25);

  // Test validate (valid input)
  const validResult = output.validate({
    name: "Bob",
    age: 40,
    email: "bob@test.com",
  });
  TestEquality.equals("validate.success", validResult.success, true);

  // Test validate (invalid input)
  const invalidResult = output.validate({
    name: "Invalid",
    age: "not-a-number",
    email: "test@test.com",
  });
  TestEquality.equals("validate.failure", invalidResult.success, false);
};
