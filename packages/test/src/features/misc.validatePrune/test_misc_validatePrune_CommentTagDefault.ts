import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_validatePrune_CommentTagDefault =
  _test_misc_validatePrune("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.misc.validatePrune<CommentTagDefault>(input));
