import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertGuardEquals_CommentTagArray = _test_assertGuardEquals(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertGuardEquals<CommentTagArray>(input),
);
