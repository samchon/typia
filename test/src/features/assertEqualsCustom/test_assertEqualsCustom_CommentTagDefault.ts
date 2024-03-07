import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagDefault = _test_assertEquals(
  CustomGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.assertEquals<CommentTagDefault>(input, (p) => new CustomGuardError(p)),
);
