import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_prune_CommentTagAtomicUnion = (): void =>
  _test_misc_prune("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )((input) => typia.misc.prune<CommentTagAtomicUnion>(input));
