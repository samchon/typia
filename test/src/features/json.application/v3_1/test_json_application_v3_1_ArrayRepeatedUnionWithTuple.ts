import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_v3_1_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    version: "3.1",
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.application<ArrayRepeatedUnionWithTupleApplication, "3.1">());

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
