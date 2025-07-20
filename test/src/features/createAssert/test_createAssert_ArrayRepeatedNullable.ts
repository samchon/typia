import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssert_ArrayRepeatedNullable = (): void =>
  _test_assert(TypeGuardError)("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(typia.createAssert<ArrayRepeatedNullable>());
