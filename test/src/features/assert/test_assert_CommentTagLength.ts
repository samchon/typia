import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagLength = (): void => _test_assert(TypeGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.assert<CommentTagLength>(input));
