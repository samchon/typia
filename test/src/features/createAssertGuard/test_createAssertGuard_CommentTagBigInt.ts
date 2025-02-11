import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertGuard_CommentTagBigInt = _test_assertGuard(
  TypeGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
  typia.createAssertGuard<CommentTagBigInt>(),
);
