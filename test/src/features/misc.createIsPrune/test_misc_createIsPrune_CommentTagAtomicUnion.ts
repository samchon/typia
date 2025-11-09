import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_createIsPrune_CommentTagAtomicUnion = (): void => _test_misc_isPrune(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.misc.createIsPrune<CommentTagAtomicUnion>());
