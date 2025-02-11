import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssert_ArraySimple = _test_assert(TypeGuardError)(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createAssert<ArraySimple>());
