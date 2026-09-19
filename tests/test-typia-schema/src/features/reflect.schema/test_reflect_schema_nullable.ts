import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_schema_nullable = (): void => {
  // nullable string
  const nullableUnit = typia.reflect.schema<string | null>();
  TestEquality.equals("nullable is true", nullableUnit.schema.nullable, true);
  TestEquality.equals("atomics length", nullableUnit.schema.atomics.length, 1);
  TestEquality.equals(
    "atomic type is string",
    nullableUnit.schema.atomics[0]?.type,
    "string",
  );

  // string | undefined (not optional, but not required)
  const undefinedUnit = typia.reflect.schema<string | undefined>();
  TestEquality.equals(
    "required is false",
    undefinedUnit.schema.required,
    false,
  );
  TestEquality.equals(
    "atomics length for undefined union",
    undefinedUnit.schema.atomics.length,
    1,
  );
};
