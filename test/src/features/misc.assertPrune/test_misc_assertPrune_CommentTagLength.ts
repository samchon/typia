import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_CommentTagLength = _test_misc_assertPrune(
  TypeGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)((input) =>
  typia.misc.assertPrune<CommentTagLength>(input),
);
