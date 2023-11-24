import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertGuard_CommentTagRange = _test_assertGuard(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.assertGuard<CommentTagRange>(input),
);
