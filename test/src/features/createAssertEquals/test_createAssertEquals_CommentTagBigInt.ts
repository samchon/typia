import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertEquals_CommentTagBigInt = _test_assertEquals(
  TypeGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
  typia.createAssertEquals<CommentTagBigInt>(),
);
