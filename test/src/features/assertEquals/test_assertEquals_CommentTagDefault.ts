import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertEquals_CommentTagDefault = _test_assertEquals(
  TypeGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.assertEquals<CommentTagDefault>(input),
);
