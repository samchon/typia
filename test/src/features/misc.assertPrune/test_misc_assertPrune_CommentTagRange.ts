import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_assertPrune_CommentTagRange = _test_misc_assertPrune(
  TypeGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)((input) =>
  typia.misc.assertPrune<CommentTagRange>(input),
);
