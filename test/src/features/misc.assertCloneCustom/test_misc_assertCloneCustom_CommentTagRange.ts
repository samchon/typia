import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_CommentTagRange = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.misc.assertClone<CommentTagRange>(input, (p) => new CustomGuardError(p)));
