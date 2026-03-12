import { TestValidator } from "@nestia/e2e";
import typia from "typia";

interface IValue {
  value: number;
}

export const test_json_stringify_number = (): void => {
  // top-level number
  TestValidator.equals(
    "top-level finite",
    typia.json.stringify<number>(42),
    "42",
  );
  TestValidator.equals(
    "top-level Infinity",
    typia.json.stringify<number>(Infinity),
    "null",
  );
  TestValidator.equals(
    "top-level -Infinity",
    typia.json.stringify<number>(-Infinity),
    "null",
  );
  TestValidator.equals(
    "top-level NaN",
    typia.json.stringify<number>(NaN),
    "null",
  );

  // object property
  TestValidator.equals(
    "finite number",
    typia.json.stringify<IValue>({ value: 42 }),
    '{"value":42}',
  );
  TestValidator.equals(
    "Infinity",
    typia.json.stringify<IValue>({ value: Infinity }),
    '{"value":null}',
  );
  TestValidator.equals(
    "-Infinity",
    typia.json.stringify<IValue>({ value: -Infinity }),
    '{"value":null}',
  );
  TestValidator.equals(
    "NaN",
    typia.json.stringify<IValue>({ value: NaN }),
    '{"value":null}',
  );

  // array — uses .map().join() so null must become the string "null", not ""
  TestValidator.equals(
    "array finite numbers",
    typia.json.stringify<number[]>([1, 2, 3]),
    "[1,2,3]",
  );
  TestValidator.equals(
    "array Infinity",
    typia.json.stringify<number[]>([Infinity]),
    "[null]",
  );
  TestValidator.equals(
    "array mixed non-finite",
    typia.json.stringify<number[]>([NaN, Infinity, -Infinity]),
    "[null,null,null]",
  );
};
