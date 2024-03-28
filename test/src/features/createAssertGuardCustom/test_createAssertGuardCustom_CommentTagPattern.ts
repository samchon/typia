import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertGuardCustom_CommentTagPattern = _test_assertGuard(
  CustomGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
  typia.createAssertGuard<CommentTagPattern>((p) => new CustomGuardError(p)),
);
