import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagAtomicUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.createAssertGuardEquals<CommentTagAtomicUnion>());
