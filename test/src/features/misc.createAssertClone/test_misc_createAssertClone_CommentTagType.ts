import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_CommentTagType = (): void => _test_misc_assertClone(TypeGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.misc.createAssertClone<CommentTagType>());
