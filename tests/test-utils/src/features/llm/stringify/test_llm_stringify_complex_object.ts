import { TestEquality } from "@typia/template/equality";
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
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains error marker",
      output.includes("// ❌"),
      true,
    );
    TestEquality.equals(
      "contains address.zip path",
      output.includes("$input.address.zip"),
      true,
    );
  }
};
