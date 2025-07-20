import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_assertPrune_CommentTagNaN = (): void =>
  _test_misc_assertPrune(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )((input) => typia.misc.assertPrune<CommentTagNaN>(input));
