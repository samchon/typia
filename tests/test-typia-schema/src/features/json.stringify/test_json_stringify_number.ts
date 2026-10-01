import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface IValue {
  value: number;
}

/**
 * Verifies json stringify number against the native typia.json.stringify
 * output.
 *
 * The case builds its input in this file and asserts top-level finite,
 * top-level Infinity, top-level -Infinity, top-level NaN, finite number,
 * Infinity.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.stringify is evaluated by the native host on the types declared in this case and the result is checked by 11 assertions (top-level finite; top-level Infinity; top-level -Infinity; top-level NaN; finite number; Infinity).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (top-level finite; top-level Infinity; top-level -Infinity; top-level NaN; finite number; Infinity) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_stringify_number is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
