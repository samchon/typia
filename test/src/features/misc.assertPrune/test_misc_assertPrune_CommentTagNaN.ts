import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_CommentTagNaN = _test_misc_assertPrune(
  TypeGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.misc.assertPrune<CommentTagNaN>(input),
);
