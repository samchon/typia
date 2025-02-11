import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assertCustom_CommentTagFormat = _test_assert(
  CustomGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.assert<CommentTagFormat>(input, (p) => new CustomGuardError(p)),
);
