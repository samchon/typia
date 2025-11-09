import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagRangeBigInt = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)((input) => typia.assertGuard<CommentTagRangeBigInt>(input, (p) => new CustomGuardError(p)));
