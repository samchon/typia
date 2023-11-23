import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createAssertPrune_CommentTagDefault =
  _test_misc_assertPrune("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.misc.createAssertPrune<CommentTagDefault>());
