import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_CommentTagRangeBigInt = _test_assertGuardEquals(CustomGuardError)(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)((input) => typia.assertGuardEquals<CommentTagRangeBigInt>(input, (p) => new CustomGuardError(p)));
