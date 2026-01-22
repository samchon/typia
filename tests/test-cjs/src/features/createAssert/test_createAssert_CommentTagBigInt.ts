import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssert_CommentTagBigInt = (): void =>
  _test_assert(TypeGuardError)("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )(typia.createAssert<CommentTagBigInt>());
