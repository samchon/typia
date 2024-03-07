import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagType = _test_assertGuard(
  CustomGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
  typia.assertGuard<CommentTagType>(input, (p) => new CustomGuardError(p)),
);
