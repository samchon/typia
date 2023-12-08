import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_assertClone_CommentTagArray = _test_misc_assertClone(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.misc.assertClone<CommentTagArray>(input),
);
