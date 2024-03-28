import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertGuardCustom_CommentTagDefault = _test_assertGuard(
  CustomGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.assertGuard<CommentTagDefault>(input, (p) => new CustomGuardError(p)),
);
