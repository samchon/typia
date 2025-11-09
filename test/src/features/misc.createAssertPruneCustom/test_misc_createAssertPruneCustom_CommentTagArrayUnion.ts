import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagArrayUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.misc.createAssertPrune<CommentTagArrayUnion>((p) => new CustomGuardError(p)));
