import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_CommentTagRange = (): void => _test_misc_assertClone(TypeGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.misc.assertClone<CommentTagRange>(input));
