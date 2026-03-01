import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_nullable = (): void => {
  // nullable string
  const nullableUnit = typia.reflect.schema<string | null>();
  TestValidator.equals("nullable is true", nullableUnit.schema.nullable, true);
  TestValidator.equals("atomics length", nullableUnit.schema.atomics.length, 1);
  TestValidator.equals("atomic type is string", nullableUnit.schema.atomics[0]?.type, "string");

  // string | undefined (not optional, but not required)
  const undefinedUnit = typia.reflect.schema<string | undefined>();
  TestValidator.equals("required is false", undefinedUnit.schema.required, false);
  TestValidator.equals("atomics length for undefined union", undefinedUnit.schema.atomics.length, 1);
};
