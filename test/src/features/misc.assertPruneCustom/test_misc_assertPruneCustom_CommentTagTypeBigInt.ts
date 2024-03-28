import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_assertPruneCustom_CommentTagTypeBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.misc.assertPrune<CommentTagTypeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
