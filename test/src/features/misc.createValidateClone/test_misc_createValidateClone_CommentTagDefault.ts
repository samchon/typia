import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createValidateClone_CommentTagDefault =
  _test_misc_validateClone("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.misc.createValidateClone<CommentTagDefault>());
