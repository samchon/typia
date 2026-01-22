import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_assertClone_ArrayRecursive = (): void =>
  _test_misc_assertClone(TypeGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) => typia.misc.assertClone<ArrayRecursive>(input));
