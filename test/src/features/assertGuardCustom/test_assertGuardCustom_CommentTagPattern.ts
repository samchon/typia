import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertGuardCustom_CommentTagPattern = _test_assertGuard(
  CustomGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assertGuard<CommentTagPattern>(input, (p) => new CustomGuardError(p)),
);
