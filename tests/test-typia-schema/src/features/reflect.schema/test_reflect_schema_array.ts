import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_schema_array = (): void => {
  // string[]
  const stringArrayUnit = typia.reflect.schema<string[]>();
  TestEquality.equals("arrays length", stringArrayUnit.schema.arrays.length, 1);
  TestValidator.predicate(
    "arrays name",
    () => !!stringArrayUnit.schema.arrays[0]?.name.includes("string"),
  );

  // components has array definition
  TestEquality.equals(
    "components arrays length",
    stringArrayUnit.components.arrays.length,
    1,
  );
  TestEquality.equals(
    "array element is string",
    stringArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );

  // number[]
  const numberArrayUnit = typia.reflect.schema<number[]>();
  TestEquality.equals(
    "number arrays length",
    numberArrayUnit.schema.arrays.length,
    1,
  );
  TestEquality.equals(
    "number array element",
    numberArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "number",
  );
};
