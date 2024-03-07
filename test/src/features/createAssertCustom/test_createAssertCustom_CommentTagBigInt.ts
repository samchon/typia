import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagBigInt = _test_assert(
  CustomGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
  typia.createAssert<CommentTagBigInt>((p) => new CustomGuardError(p)),
);
