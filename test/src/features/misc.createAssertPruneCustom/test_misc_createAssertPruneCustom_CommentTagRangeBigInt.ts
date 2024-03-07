import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagRangeBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.misc.createAssertPrune<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
