import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_application_chatgpt_ArrayRepeatedUnion =
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayRepeatedUnion",
  })(typia.llm.application<ArrayRepeatedUnionApplication, "chatgpt">());

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
