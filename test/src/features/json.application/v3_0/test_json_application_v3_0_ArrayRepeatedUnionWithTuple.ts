import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_v3_0_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.application<ArrayRepeatedUnionWithTupleApplication, "3.0">());

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
