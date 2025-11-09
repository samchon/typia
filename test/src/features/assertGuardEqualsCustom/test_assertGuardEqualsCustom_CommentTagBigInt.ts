import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_CommentTagBigInt = (): void => _test_assertGuardEquals(CustomGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((input) => typia.assertGuardEquals<CommentTagBigInt>(input, (p) => new CustomGuardError(p)));
