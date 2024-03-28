import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_createAssertPruneCustom_CommentTagRangeBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.misc.createAssertPrune<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
