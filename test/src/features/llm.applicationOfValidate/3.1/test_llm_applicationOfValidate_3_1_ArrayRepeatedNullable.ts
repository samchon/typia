import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_applicationOfValidate_3_1_ArrayRepeatedNullable =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable,
  })(
    typia.llm.applicationOfValidate<ArrayRepeatedNullableApplication, "3.1">(),
  );

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedNullable;
    second: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null;
    second: ArrayRepeatedNullable | null;
    third?: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable | null>;
}
