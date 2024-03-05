import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertCustom_CommentTagBigInt = _test_assert(
  CustomGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
  typia.createAssert<CommentTagBigInt>((p) => new CustomGuardError(p)),
);
