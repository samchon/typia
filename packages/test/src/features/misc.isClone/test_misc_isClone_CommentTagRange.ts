import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_isClone_CommentTagRange = _test_misc_isClone(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.misc.isClone<CommentTagRange>(input),
);
