import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_assertPrune_CommentTagRangeBigInt =
  _test_misc_assertPrune("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )((input) => typia.misc.assertPrune<CommentTagRangeBigInt>(input));
