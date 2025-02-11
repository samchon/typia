import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssert_ArrayRepeatedUnionWithTuple = _test_assert(
  TypeGuardError,
)("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
  ArrayRepeatedUnionWithTuple,
)(typia.createAssert<ArrayRepeatedUnionWithTuple>());
