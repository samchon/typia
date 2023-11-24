import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_validateClone_CommentTagLength =
  _test_misc_validateClone("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) => typia.misc.validateClone<CommentTagLength>(input));
