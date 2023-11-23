import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_isPrune_CommentTagRange = _test_misc_isPrune(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.misc.isPrune<CommentTagRange>(input),
);
