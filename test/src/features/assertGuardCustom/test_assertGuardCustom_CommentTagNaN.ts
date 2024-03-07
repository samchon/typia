import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagNaN = _test_assertGuard(
  CustomGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.assertGuard<CommentTagNaN>(input, (p) => new CustomGuardError(p)),
);
