import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createAssertParse_ArrayRepeatedUnionWithTuple =
  _test_json_assertParse(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.json.createAssertParse<ArrayRepeatedUnionWithTuple>(),
  );
