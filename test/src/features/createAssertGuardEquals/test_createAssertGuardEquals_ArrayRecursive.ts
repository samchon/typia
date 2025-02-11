import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertGuardEquals_ArrayRecursive =
  _test_assertGuardEquals(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(typia.createAssertGuardEquals<ArrayRecursive>());
