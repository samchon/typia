import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayRecursive =
  _test_json_assertStringify(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) => typia.json.assertStringify<ArrayRecursive>(input));
