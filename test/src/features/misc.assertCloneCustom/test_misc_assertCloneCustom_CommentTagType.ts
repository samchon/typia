import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_CommentTagType = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.misc.assertClone<CommentTagType>(input, (p) => new CustomGuardError(p)));
