import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssertCustom_CommentTagArray = _test_assert(
  CustomGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)(
  typia.createAssert<CommentTagArray>((p) => new CustomGuardError(p)),
);
