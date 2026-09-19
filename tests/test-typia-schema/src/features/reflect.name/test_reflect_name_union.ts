import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_name_union = (): void => {
  TestEquality.equals(
    "string | number",
    typia.reflect.name<string | number>(),
    "string | number",
  );
  TestEquality.equals(
    "string | null",
    typia.reflect.name<string | null>(),
    "string | null",
  );
};
