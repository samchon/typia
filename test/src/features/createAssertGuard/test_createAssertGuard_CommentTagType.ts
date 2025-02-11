import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagType = _test_assertGuard(TypeGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createAssertGuard<CommentTagType>());
