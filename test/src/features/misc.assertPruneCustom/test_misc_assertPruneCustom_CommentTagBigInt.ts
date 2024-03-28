import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_assertPruneCustom_CommentTagBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)((input) =>
    typia.misc.assertPrune<CommentTagBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
