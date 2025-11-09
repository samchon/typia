import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagType = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.misc.createAssertPrune<CommentTagType>((p) => new CustomGuardError(p)));
