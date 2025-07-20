import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_validateClone_CommentTagObjectUnion = (): void =>
  _test_misc_validateClone("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.misc.validateClone<CommentTagObjectUnion>(input));
