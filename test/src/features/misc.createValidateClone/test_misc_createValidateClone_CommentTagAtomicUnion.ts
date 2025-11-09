import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_createValidateClone_CommentTagAtomicUnion = (): void =>
  _test_misc_validateClone("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )(typia.misc.createValidateClone<CommentTagAtomicUnion>());
