import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_tuple = (): void => {
  const unit = typia.reflect.schema<[string, number, boolean]>();

  // schema has tuples reference
  TestValidator.equals("tuples length", unit.schema.tuples.length, 1);

  // components has tuple definition
  TestValidator.equals("components tuples length", unit.components.tuples.length, 1);

  const tuple = unit.components.tuples[0];
  if (tuple === undefined) return;

  TestValidator.equals("tuple elements count", tuple.elements.length, 3);
  TestValidator.equals("first element is string", tuple.elements[0]?.atomics[0]?.type, "string");
  TestValidator.equals("second element is number", tuple.elements[1]?.atomics[0]?.type, "number");
  TestValidator.equals("third element is boolean", tuple.elements[2]?.atomics[0]?.type, "boolean");
};
