import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_name_array = (): void => {
  TestEquality.equals("string[]", typia.reflect.name<string[]>(), "string[]");
  TestEquality.equals("number[]", typia.reflect.name<number[]>(), "number[]");
  TestEquality.equals(
    "boolean[][]",
    typia.reflect.name<boolean[][]>(),
    "boolean[][]",
  );
};
