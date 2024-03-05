import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createAssertPrune_CommentTagArray =
  _test_misc_assertPrune(TypeGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(typia.misc.createAssertPrune<CommentTagArray>());
