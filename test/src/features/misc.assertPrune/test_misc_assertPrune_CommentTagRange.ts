import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_CommentTagRange = (): void => _test_misc_assertPrune(TypeGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.misc.assertPrune<CommentTagRange>(input));
