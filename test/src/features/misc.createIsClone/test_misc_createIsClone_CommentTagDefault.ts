import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createIsClone_CommentTagDefault = _test_misc_isClone(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
  typia.misc.createIsClone<CommentTagDefault>(),
);
