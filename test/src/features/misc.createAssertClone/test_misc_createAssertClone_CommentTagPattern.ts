import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_CommentTagPattern = (): void => _test_misc_assertClone(TypeGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.misc.createAssertClone<CommentTagPattern>());
