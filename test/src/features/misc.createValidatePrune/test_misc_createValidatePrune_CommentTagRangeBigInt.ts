import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_createValidatePrune_CommentTagRangeBigInt = (): void =>
  _test_misc_validatePrune("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )(typia.misc.createValidatePrune<CommentTagRangeBigInt>());
