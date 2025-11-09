import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagNaN = (): void => _test_assert(TypeGuardError)(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.assert<CommentTagNaN>(input));
