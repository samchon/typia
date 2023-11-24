import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_createIsClone_ArrayRepeatedUnionWithTuple =
  _test_misc_isClone(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.misc.createIsClone<ArrayRepeatedUnionWithTuple>(),
  );
