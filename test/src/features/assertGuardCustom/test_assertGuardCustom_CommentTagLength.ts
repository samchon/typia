import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagLength = _test_assertGuard(
  CustomGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)((input) =>
  typia.assertGuard<CommentTagLength>(input, (p) => new CustomGuardError(p)),
);
