import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assert_CommentTagInfinite = _test_assert(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.assert<CommentTagInfinite>(input),
);
