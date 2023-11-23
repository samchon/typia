import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_equals_CommentTagPattern = _test_equals(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.equals<CommentTagPattern>(input),
);
