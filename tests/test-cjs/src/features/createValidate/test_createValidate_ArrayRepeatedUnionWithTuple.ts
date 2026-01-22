import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createValidate_ArrayRepeatedUnionWithTuple = (): void =>
  _test_validate("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple,
  )(typia.createValidate<ArrayRepeatedUnionWithTuple>());
