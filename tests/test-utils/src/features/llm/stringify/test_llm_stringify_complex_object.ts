import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IAddress {
  street: string;
  city: string;
  zip: string;
}

interface IPerson {
  name: string;
  age: number;
  address: IAddress;
}

export const test_llm_stringify_complex_object = (): void => {
  const valid: IPerson = {
    name: "John",
    age: 30,
    address: { street: "123 Main St", city: "NYC", zip: "10001" },
  };
  (valid.address as { zip: unknown }).zip = 10001;
  const result = typia.validate<IPerson>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains address.zip path", output.includes("$input.address.zip"), true);
  }
};
