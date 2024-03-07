import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayRepeatedUnionWithTuple =
  _test_json_assertParse(TypeGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.json.assertParse<ArrayRepeatedUnionWithTuple>(input),
  );
