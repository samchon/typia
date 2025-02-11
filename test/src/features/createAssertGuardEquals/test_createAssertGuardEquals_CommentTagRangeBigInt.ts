import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagRangeBigInt = _test_assertGuardEquals(TypeGuardError)(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)(typia.createAssertGuardEquals<CommentTagRangeBigInt>());
