import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_equals_CommentTagInfinite = _test_equals(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.equals<CommentTagInfinite>(input),
);
