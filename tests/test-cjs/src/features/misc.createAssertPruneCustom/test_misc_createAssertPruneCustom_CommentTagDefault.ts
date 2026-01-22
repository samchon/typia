import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createAssertPruneCustom_CommentTagDefault = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createAssertPrune<CommentTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
