import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_llm_application_3_0_ArrayRepeatedUnionWithTuple =
  _test_llm_application({
    model: "3.0",
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.llm.application<ArrayRepeatedUnionWithTupleApplication, "3.0">());

interface ArrayRepeatedUnionWithTupleApplication {
  insert(first: ArrayRepeatedUnionWithTuple): Promise<void>;
  reduce(
    first: ArrayRepeatedUnionWithTuple,
    second: ArrayRepeatedUnionWithTuple | null,
  ): Promise<ArrayRepeatedUnionWithTuple>;
  coalesce(
    first: ArrayRepeatedUnionWithTuple | null,
    second: ArrayRepeatedUnionWithTuple | null,
    third?: ArrayRepeatedUnionWithTuple | null,
  ): Promise<ArrayRepeatedUnionWithTuple | null>;
}
