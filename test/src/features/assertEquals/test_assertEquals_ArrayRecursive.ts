import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertEquals_ArrayRecursive = _test_assertEquals(
  TypeGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.assertEquals<ArrayRecursive>(input),
);
