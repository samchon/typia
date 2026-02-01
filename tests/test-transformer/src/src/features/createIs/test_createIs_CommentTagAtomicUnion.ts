import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createIs_CommentTagAtomicUnion = (): void => _test_is(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.createIs<CommentTagAtomicUnion>());
