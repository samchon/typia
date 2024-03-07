import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayRepeatedRequired = _test_assert(
  TypeGuardError,
)("ArrayRepeatedRequired")<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
  typia.createAssert<ArrayRepeatedRequired>(),
);
