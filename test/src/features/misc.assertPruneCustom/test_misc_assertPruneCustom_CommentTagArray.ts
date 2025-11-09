import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_CommentTagArray = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.misc.assertPrune<CommentTagArray>(input, (p) => new CustomGuardError(p)));
