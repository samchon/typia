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
 * @evidence contracts/e2e.md#necessary-boundary Native parameters feed the runtime structuredOutput wrapper. Authored parsed name/age, coerced age and a bad-number rejection distinguish generated-schema consumption failures. Unasserted data fields and whole-object preservation are outside these checks.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
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
