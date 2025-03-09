import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_compare_equals_CommentTagAtomicUnion = _test_compare_equals(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((a, b) => typia.compare.equals<CommentTagAtomicUnion>(a, b));
