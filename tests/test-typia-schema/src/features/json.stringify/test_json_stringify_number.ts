import { TestValidator } from "@nestia/e2e";
import typia from "typia";

interface IValue {
  value: number;
}

export const test_json_stringify_number = (): void => {
  // top-level number
  const parseNumber = (v: number) =>
    JSON.parse(typia.json.stringify<number>(v));
  TestValidator.equals("top-level finite number", parseNumber(42), 42);
  TestValidator.equals("top-level Infinity", parseNumber(Infinity), null);
  TestValidator.equals("top-level -Infinity", parseNumber(-Infinity), null);
  TestValidator.equals("top-level NaN", parseNumber(NaN), null);

  // object property
  const parseObject = (v: number) =>
    (JSON.parse(typia.json.stringify<IValue>({ value: v })) as IValue).value;
  TestValidator.equals("finite number", parseObject(42), 42);
  TestValidator.equals("Infinity", parseObject(Infinity), null);
  TestValidator.equals("-Infinity", parseObject(-Infinity), null);
  TestValidator.equals("NaN", parseObject(NaN), null);

  // array — uses .map().join() so null must become the string "null", not ""
  const parseArray = (v: number[]) =>
    JSON.parse(typia.json.stringify<number[]>(v)) as unknown[];
  TestValidator.equals(
    "array finite numbers",
    parseArray([1, 2, 3]),
    [1, 2, 3],
  );
  TestValidator.equals("array Infinity", parseArray([Infinity]), [null]);
  TestValidator.equals(
    "array mixed non-finite",
    parseArray([NaN, Infinity, -Infinity]),
    [null, null, null],
  );
};
