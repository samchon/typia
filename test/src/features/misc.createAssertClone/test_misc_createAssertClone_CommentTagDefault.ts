import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createAssertClone_CommentTagDefault =
  _test_misc_assertClone("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.misc.createAssertClone<CommentTagDefault>());
