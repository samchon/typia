import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_CommentTagPattern = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.misc.createAssertClone<CommentTagPattern>((p) => new CustomGuardError(p)));
