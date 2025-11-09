import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_CommentTagAtomicUnion = (): void => _test_misc_assertClone(TypeGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.misc.assertClone<CommentTagAtomicUnion>(input));
