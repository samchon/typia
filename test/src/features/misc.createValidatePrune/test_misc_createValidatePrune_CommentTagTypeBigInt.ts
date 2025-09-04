import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_createValidatePrune_CommentTagTypeBigInt = (): void =>
  _test_misc_validatePrune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )(typia.misc.createValidatePrune<CommentTagTypeBigInt>());
