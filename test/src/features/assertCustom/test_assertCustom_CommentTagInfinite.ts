import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertCustom_CommentTagInfinite = _test_assert(
  CustomGuardError,
)("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.assert<CommentTagInfinite>(input, (p) => new CustomGuardError(p)),
);
