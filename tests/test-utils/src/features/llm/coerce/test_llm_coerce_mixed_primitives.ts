import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IPrimitiveArrays {
  numbers: number[];
  booleans: boolean[];
  nullables: null[];
}

export const test_llm_coerce_mixed_primitives = (): void => {
  const parameters = typia.llm.parameters<IPrimitiveArrays>();
  const original: IPrimitiveArrays = {
    numbers: [1, 2, 3],
    booleans: [true, false, true],
    nullables: [null, null],
  };

  const corrupted = {
    numbers: original.numbers.map((n) => JSON.stringify(n) as unknown),
    booleans: original.booleans.map((b) => JSON.stringify(b) as unknown),
    nullables: original.nullables.map((n) => JSON.stringify(n) as unknown),
  };

  const result = LlmJson.parse<IPrimitiveArrays>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("numbers", result.data.numbers, [1, 2, 3]);
    TestEquality.equals("booleans", result.data.booleans, [true, false, true]);
    TestEquality.equals("nullables", result.data.nullables, [null, null]);
  }
};
