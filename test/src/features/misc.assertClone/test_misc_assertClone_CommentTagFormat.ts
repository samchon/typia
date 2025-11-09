import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_CommentTagFormat = (): void => _test_misc_assertClone(TypeGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.misc.assertClone<CommentTagFormat>(input));
