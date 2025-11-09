import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_CommentTagArray = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.misc.createAssertClone<CommentTagArray>((p) => new CustomGuardError(p)));
