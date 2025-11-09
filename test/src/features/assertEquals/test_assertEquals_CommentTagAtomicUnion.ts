import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagAtomicUnion = (): void => _test_assertEquals(TypeGuardError)(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.assertEquals<CommentTagAtomicUnion>(input));
