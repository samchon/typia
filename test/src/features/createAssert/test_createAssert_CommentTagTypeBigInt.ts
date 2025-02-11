import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssert_CommentTagTypeBigInt = _test_assert(
  TypeGuardError,
)("CommentTagTypeBigInt")<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  typia.createAssert<CommentTagTypeBigInt>(),
);
