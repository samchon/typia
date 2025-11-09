import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_assertPruneCustom_CommentTagRangeBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
    typia.misc.assertPrune<CommentTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
