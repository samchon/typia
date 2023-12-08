import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_validatePrune_CommentTagTypeBigInt =
  _test_misc_validatePrune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )((input) => typia.misc.validatePrune<CommentTagTypeBigInt>(input));
