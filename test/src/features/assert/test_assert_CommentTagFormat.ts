import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagFormat = (): void => _test_assert(TypeGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.assert<CommentTagFormat>(input));
