import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_CommentTagRangeBigInt =
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.misc.createAssertPrune<CommentTagRangeBigInt>(),
  );
