import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface IValue {
  value: number;
}

export const test_json_stringify_number = (): void => {
  // top-level number
  TestEquality.equals(
    "top-level finite",
    typia.json.stringify<number>(42),
    "42",
  );
  TestEquality.equals(
    "top-level Infinity",
    typia.json.stringify<number>(Infinity),
    "null",
  );
  TestEquality.equals(
    "top-level -Infinity",
    typia.json.stringify<number>(-Infinity),
    "null",
  );
  TestEquality.equals(
    "top-level NaN",
    typia.json.stringify<number>(NaN),
    "null",
  );

  // object property
  TestEquality.equals(
    "finite number",
    typia.json.stringify<IValue>({ value: 42 }),
    '{"value":42}',
  );
  TestEquality.equals(
    "Infinity",
    typia.json.stringify<IValue>({ value: Infinity }),
    '{"value":null}',
  );
  TestEquality.equals(
    "-Infinity",
    typia.json.stringify<IValue>({ value: -Infinity }),
    '{"value":null}',
  );
  TestEquality.equals(
    "NaN",
    typia.json.stringify<IValue>({ value: NaN }),
    '{"value":null}',
  );

  // array — uses .map().join() so null must become the string "null", not ""
  TestEquality.equals(
    "array finite numbers",
    typia.json.stringify<number[]>([1, 2, 3]),
    "[1,2,3]",
  );
  TestEquality.equals(
    "array Infinity",
    typia.json.stringify<number[]>([Infinity]),
    "[null]",
  );
  TestEquality.equals(
    "array mixed non-finite",
    typia.json.stringify<number[]>([NaN, Infinity, -Infinity]),
    "[null,null,null]",
  );
};
