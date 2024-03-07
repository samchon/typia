import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayRepeatedUnion = _test_json_assertParse(
  TypeGuardError,
)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
  typia.json.assertParse<ArrayRepeatedUnion>(input),
);
