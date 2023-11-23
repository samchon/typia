import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assert_CommentTagDefault = _test_assert(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.assert<CommentTagDefault>(input),
);
