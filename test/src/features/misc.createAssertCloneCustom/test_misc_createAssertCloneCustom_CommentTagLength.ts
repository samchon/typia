import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_CommentTagLength = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.misc.createAssertClone<CommentTagLength>((p) => new CustomGuardError(p)));
