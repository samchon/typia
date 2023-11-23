import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_validateClone_CommentTagAtomicUnion =
  _test_misc_validateClone("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )((input) => typia.misc.validateClone<CommentTagAtomicUnion>(input));
