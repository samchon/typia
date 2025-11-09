import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_CommentTagAtomicUnion = (): void => _test_misc_assertClone(CustomGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.misc.createAssertClone<CommentTagAtomicUnion>((p) => new CustomGuardError(p)));
