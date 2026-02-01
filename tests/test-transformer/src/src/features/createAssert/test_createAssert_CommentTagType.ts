import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagType = (): void => _test_assert(TypeGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createAssert<CommentTagType>());
