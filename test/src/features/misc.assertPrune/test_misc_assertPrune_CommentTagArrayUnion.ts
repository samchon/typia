import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_CommentTagArrayUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((input) => typia.misc.assertPrune<CommentTagArrayUnion>(input));
