import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_createClone_ArrayRepeatedUnionWithTuple = (): void =>
  _test_misc_clone("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple,
  )(typia.misc.createClone<ArrayRepeatedUnionWithTuple>());
