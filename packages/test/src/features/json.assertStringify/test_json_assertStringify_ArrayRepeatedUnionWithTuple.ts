import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_assertStringify_ArrayRepeatedUnionWithTuple =
  _test_json_assertStringify(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.json.assertStringify<ArrayRepeatedUnionWithTuple>(input),
  );
