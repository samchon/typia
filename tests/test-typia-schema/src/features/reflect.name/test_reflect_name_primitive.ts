import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_name_primitive = (): void => {
  TestEquality.equals("string", typia.reflect.name<string>(), "string");
  TestEquality.equals("number", typia.reflect.name<number>(), "number");
  TestEquality.equals("boolean", typia.reflect.name<boolean>(), "boolean");
  TestEquality.equals("bigint", typia.reflect.name<bigint>(), "bigint");
  TestEquality.equals("null", typia.reflect.name<null>(), "null");
  TestEquality.equals(
    "undefined",
    typia.reflect.name<undefined>(),
    "undefined",
  );
};
