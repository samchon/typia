import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagAtomicUnion = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.assertGuard<CommentTagAtomicUnion>(input, (p) => new CustomGuardError(p)));
