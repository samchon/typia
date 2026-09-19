import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_name_tuple = (): void => {
  TestEquality.equals(
    "[string, number]",
    typia.reflect.name<[string, number]>(),
    "[string, number]",
  );
  TestEquality.equals(
    "[boolean, string, number]",
    typia.reflect.name<[boolean, string, number]>(),
    "[boolean, string, number]",
  );
};
