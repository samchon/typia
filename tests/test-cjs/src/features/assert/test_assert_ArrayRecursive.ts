import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assert_ArrayRecursive = (): void =>
  _test_assert(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) => typia.assert<ArrayRecursive>(input));
