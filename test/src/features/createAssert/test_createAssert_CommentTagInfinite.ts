import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagInfinite = (): void => _test_assert(TypeGuardError)(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createAssert<CommentTagInfinite>());
