import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface IValue {
  value: number;
}

/**
 * Generated JSON number serialization maps nonfinite values to null.
 *
 * Run authored inputs through the native producer and check the outputs below.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated JSON number serialization maps nonfinite values to null.
 * @evidence contracts/testing.md#independent-expectations Eleven handwritten JSON strings fix behavior independently of another typia producer.
 * @evidence contracts/testing.md#distinguishing-cases Finite, Infinity, negative Infinity and NaN remain separate at scalar/object locations, alongside finite and mixed nonfinite arrays.
 * @evidence contracts/testing.md#execution-ownership The schema start runner discovers test_json_stringify_number through DynamicExecutor and ttsx with the native typia plugin; its exported body owns the assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native scalar and collection emission must preserve the JSON nonfinite-number rule.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load and native plugin artifact. Its inputs do not build or launch a separate host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and generated results are local to the case. The suite owns the shared host lifetime; no cold cache transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Finite, Infinity, negative Infinity and NaN remain separate at scalar/object locations, alongside finite and mixed nonfinite arrays. Original inputs and assertions remain; source review and final execution are reported separately.
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
