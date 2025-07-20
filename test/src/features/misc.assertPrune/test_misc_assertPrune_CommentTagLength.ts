import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_assertPrune_CommentTagLength = (): void =>
  _test_misc_assertPrune(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) => typia.misc.assertPrune<CommentTagLength>(input));
