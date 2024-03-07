import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayRepeatedUnionWithTuple = _test_assert(
  TypeGuardError,
)("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
  ArrayRepeatedUnionWithTuple,
)(typia.createAssert<ArrayRepeatedUnionWithTuple>());
