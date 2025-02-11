import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuard_CommentTagBigInt = _test_assertGuard(TypeGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((input) => typia.assertGuard<CommentTagBigInt>(input));
