import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_assertPrune_CommentTagArray = _test_misc_assertPrune(
  TypeGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.misc.assertPrune<CommentTagArray>(input),
);
