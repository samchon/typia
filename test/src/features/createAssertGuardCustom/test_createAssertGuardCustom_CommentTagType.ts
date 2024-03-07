import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagType = _test_assertGuard(
  CustomGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)(
  typia.createAssertGuard<CommentTagType>((p) => new CustomGuardError(p)),
);
