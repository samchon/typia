import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_schema_constant = (): void => {
  // string literal
  const stringLiteral = typia.reflect.schema<"hello">();
  TestEquality.equals(
    "constants length",
    stringLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "constant type",
    stringLiteral.schema.constants[0]?.type,
    "string",
  );
  TestEquality.equals(
    "constant value",
    stringLiteral.schema.constants[0]?.values[0]?.value,
    "hello",
  );

  // number literal
  const numberLiteral = typia.reflect.schema<42>();
  TestEquality.equals(
    "number constants length",
    numberLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "number constant type",
    numberLiteral.schema.constants[0]?.type,
    "number",
  );
  TestEquality.equals(
    "number constant value",
    numberLiteral.schema.constants[0]?.values[0]?.value,
    42,
  );

  // boolean literal
  const booleanLiteral = typia.reflect.schema<true>();
  TestEquality.equals(
    "boolean constants length",
    booleanLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "boolean constant type",
    booleanLiteral.schema.constants[0]?.type,
    "boolean",
  );
  TestEquality.equals(
    "boolean constant value",
    booleanLiteral.schema.constants[0]?.values[0]?.value,
    true,
  );
};
