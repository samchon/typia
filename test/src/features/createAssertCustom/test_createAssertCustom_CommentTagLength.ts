import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertCustom_CommentTagLength = _test_assert(
  CustomGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)(
  typia.createAssert<CommentTagLength>((p) => new CustomGuardError(p)),
);
