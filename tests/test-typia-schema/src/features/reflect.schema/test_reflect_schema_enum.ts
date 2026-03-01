import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_enum = (): void => {
  // string enum
  type Color = "red" | "green" | "blue";
  const colorUnit = typia.reflect.schema<Color>();
  TestValidator.equals("constants length", colorUnit.schema.constants.length, 1);
  TestValidator.equals("constant type", colorUnit.schema.constants[0]?.type, "string");
  TestValidator.equals("values length", colorUnit.schema.constants[0]?.values.length, 3);

  const values = colorUnit.schema.constants[0]?.values.map((v) => v.value) ?? [];
  TestValidator.predicate("has red", () => values.includes("red"));
  TestValidator.predicate("has green", () => values.includes("green"));
  TestValidator.predicate("has blue", () => values.includes("blue"));

  // number enum
  type Status = 0 | 1 | 2;
  const statusUnit = typia.reflect.schema<Status>();
  TestValidator.equals("number constants length", statusUnit.schema.constants.length, 1);
  TestValidator.equals("number constant type", statusUnit.schema.constants[0]?.type, "number");
  TestValidator.equals("number values length", statusUnit.schema.constants[0]?.values.length, 3);
};
