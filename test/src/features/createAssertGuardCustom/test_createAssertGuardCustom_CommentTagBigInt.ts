import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagBigInt = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.createAssertGuard<CommentTagBigInt>((p) => new CustomGuardError(p)));
