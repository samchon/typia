import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_isPrune_CommentTagAtomicUnion = _test_misc_isPrune(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
  typia.misc.isPrune<CommentTagAtomicUnion>(input),
);
