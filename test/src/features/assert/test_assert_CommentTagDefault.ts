import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagDefault = (): void => _test_assert(TypeGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.assert<CommentTagDefault>(input));
