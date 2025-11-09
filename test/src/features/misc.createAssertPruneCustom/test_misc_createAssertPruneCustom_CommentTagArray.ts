import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagArray = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.misc.createAssertPrune<CommentTagArray>((p) => new CustomGuardError(p)));
