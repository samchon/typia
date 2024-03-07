import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayRecursive = _test_json_assertParse(
  TypeGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.json.assertParse<ArrayRecursive>(input),
);
