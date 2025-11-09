import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_assert_ArrayRepeatedUnion = (): void =>
  _test_assert(TypeGuardError)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input) => typia.assert<ArrayRepeatedUnion>(input));
