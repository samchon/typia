import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createAssertClone_CommentTagPattern =
  _test_misc_assertClone("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.misc.createAssertClone<CommentTagPattern>());
