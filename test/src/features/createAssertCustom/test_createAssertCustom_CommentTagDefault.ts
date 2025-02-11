import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertCustom_CommentTagDefault = _test_assert(
  CustomGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
  typia.createAssert<CommentTagDefault>((p) => new CustomGuardError(p)),
);
