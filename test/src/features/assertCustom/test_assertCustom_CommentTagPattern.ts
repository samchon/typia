import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertCustom_CommentTagPattern = _test_assert(
  CustomGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assert<CommentTagPattern>(input, (p) => new CustomGuardError(p)),
);
