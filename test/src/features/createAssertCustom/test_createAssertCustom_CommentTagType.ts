import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertCustom_CommentTagType = _test_assert(
  CustomGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)(
  typia.createAssert<CommentTagType>((p) => new CustomGuardError(p)),
);
