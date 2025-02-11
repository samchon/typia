import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagBigInt = _test_assert(TypeGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.createAssert<CommentTagBigInt>());
