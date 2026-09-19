import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IMember {
  name: string;
  age: number;
  email: string;
}

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
