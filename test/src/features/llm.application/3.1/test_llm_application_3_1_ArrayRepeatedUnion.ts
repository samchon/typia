import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_application_3_1_ArrayRepeatedUnion =
  _test_llm_application({
    model: "3.1",
    name: "ArrayRepeatedUnion",
  })(typia.llm.application<ArrayRepeatedUnionApplication, "3.1">());

interface ArrayRepeatedUnionApplication {
  insert(first: ArrayRepeatedUnion): Promise<void>;
  reduce(
    first: ArrayRepeatedUnion,
    second: ArrayRepeatedUnion | null,
  ): Promise<ArrayRepeatedUnion>;
  coalesce(
    first: ArrayRepeatedUnion | null,
    second: ArrayRepeatedUnion | null,
    third?: ArrayRepeatedUnion | null,
  ): Promise<ArrayRepeatedUnion | null>;
}
