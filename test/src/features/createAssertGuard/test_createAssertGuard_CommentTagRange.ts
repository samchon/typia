import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagRange = _test_assertGuard(TypeGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createAssertGuard<CommentTagRange>());
