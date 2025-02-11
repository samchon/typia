import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagArray = _test_assert(TypeGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createAssert<CommentTagArray>());
