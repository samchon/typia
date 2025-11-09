import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createAssertPruneCustom_CommentTagBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)(
    typia.misc.createAssertPrune<CommentTagBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
