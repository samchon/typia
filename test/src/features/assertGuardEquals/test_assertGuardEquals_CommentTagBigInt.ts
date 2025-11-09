import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_CommentTagBigInt = (): void => _test_assertGuardEquals(TypeGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((input) => typia.assertGuardEquals<CommentTagBigInt>(input));
