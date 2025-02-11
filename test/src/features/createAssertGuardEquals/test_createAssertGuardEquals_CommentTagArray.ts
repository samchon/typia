import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagArray = _test_assertGuardEquals(TypeGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createAssertGuardEquals<CommentTagArray>());
