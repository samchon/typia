import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagPattern = _test_assertGuardEquals(TypeGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.createAssertGuardEquals<CommentTagPattern>());
