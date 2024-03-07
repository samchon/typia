import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagRangeBigInt = _test_assert(
  TypeGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  typia.createAssert<CommentTagRangeBigInt>(),
);
