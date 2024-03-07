import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagLength = _test_assert(
  CustomGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)((input) =>
  typia.assert<CommentTagLength>(input, (p) => new CustomGuardError(p)),
);
