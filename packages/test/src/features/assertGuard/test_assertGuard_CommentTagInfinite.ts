import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertGuard_CommentTagInfinite = _test_assertGuard(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.assertGuard<CommentTagInfinite>(input),
);
