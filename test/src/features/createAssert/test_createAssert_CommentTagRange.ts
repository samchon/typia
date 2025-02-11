import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagRange = _test_assert(TypeGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createAssert<CommentTagRange>());
