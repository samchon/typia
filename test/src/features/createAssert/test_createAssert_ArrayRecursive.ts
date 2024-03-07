import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayRecursive = _test_assert(TypeGuardError)(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.createAssert<ArrayRecursive>());
