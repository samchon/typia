import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_CommentTagDefault = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.misc.assertPrune<CommentTagDefault>(input, (p) => new CustomGuardError(p)));
