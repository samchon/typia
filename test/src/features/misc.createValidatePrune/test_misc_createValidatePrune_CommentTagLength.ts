import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createValidatePrune_CommentTagLength =
  _test_misc_validatePrune("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.misc.createValidatePrune<CommentTagLength>());
