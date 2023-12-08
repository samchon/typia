import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_equals_CommentTagDefault = _test_equals(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.equals<CommentTagDefault>(input),
);
