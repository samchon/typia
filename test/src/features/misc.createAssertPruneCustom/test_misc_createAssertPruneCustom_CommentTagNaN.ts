import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagNaN = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.misc.createAssertPrune<CommentTagNaN>((p) => new CustomGuardError(p)));
