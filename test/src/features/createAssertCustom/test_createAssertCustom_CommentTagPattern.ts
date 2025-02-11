import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertCustom_CommentTagPattern = _test_assert(
  CustomGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
  typia.createAssert<CommentTagPattern>((p) => new CustomGuardError(p)),
);
