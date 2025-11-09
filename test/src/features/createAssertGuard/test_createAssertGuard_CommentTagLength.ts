import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagLength = (): void => _test_assertGuard(TypeGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createAssertGuard<CommentTagLength>());
