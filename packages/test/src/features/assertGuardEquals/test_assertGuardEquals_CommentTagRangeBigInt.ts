import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertGuardEquals_CommentTagRangeBigInt =
  _test_assertGuardEquals("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )((input) => typia.assertGuardEquals<CommentTagRangeBigInt>(input));
