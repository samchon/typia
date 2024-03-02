import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createAssertStringify_ArrayRecursive =
  _test_json_assertStringify(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(typia.json.createAssertStringify<ArrayRecursive>());
