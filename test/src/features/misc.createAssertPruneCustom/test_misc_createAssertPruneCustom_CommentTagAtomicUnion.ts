import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagAtomicUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.misc.createAssertPrune<CommentTagAtomicUnion>((p) => new CustomGuardError(p)));
