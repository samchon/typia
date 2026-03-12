import { TestValidator } from "@nestia/e2e";
import typia from "typia";

interface IValue {
  value: number;
}

export const test_json_stringify_number = (): void => {
  const parse = (v: number) =>
    (JSON.parse(typia.json.stringify<IValue>({ value: v })) as IValue).value;
  TestValidator.equals("finite number", parse(42), 42);
  TestValidator.equals("Infinity", parse(Infinity), null);
  TestValidator.equals("-Infinity", parse(-Infinity), null);
  TestValidator.equals("NaN", parse(NaN), null);
};
