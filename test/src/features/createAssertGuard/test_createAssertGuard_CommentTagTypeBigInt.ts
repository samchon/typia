import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagTypeBigInt = (): void => _test_assertGuard(TypeGuardError)(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)(typia.createAssertGuard<CommentTagTypeBigInt>());
