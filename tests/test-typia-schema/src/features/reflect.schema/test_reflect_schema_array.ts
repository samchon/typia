import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_array = (): void => {
  // string[]
  const stringArrayUnit = typia.reflect.schema<string[]>();
  TestValidator.equals(
    "arrays length",
    stringArrayUnit.schema.arrays.length,
    1,
  );
  TestValidator.predicate(
    "arrays name",
    () => !!stringArrayUnit.schema.arrays[0]?.name.includes("string"),
  );

  // components has array definition
  TestValidator.equals(
    "components arrays length",
    stringArrayUnit.components.arrays.length,
    1,
  );
  TestValidator.equals(
    "array element is string",
    stringArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );

  // number[]
  const numberArrayUnit = typia.reflect.schema<number[]>();
  TestValidator.equals(
    "number arrays length",
    numberArrayUnit.schema.arrays.length,
    1,
  );
  TestValidator.equals(
    "number array element",
    numberArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "number",
  );
};
