import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_assertParse_ArrayRecursive = (): void =>
  _test_json_assertParse(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) => typia.json.assertParse<ArrayRecursive>(input));
