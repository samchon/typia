import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagNaN = (): void => _test_assertGuardEquals(TypeGuardError)(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.createAssertGuardEquals<CommentTagNaN>());
