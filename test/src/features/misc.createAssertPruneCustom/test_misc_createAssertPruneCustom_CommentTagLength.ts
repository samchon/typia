import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createAssertPruneCustom_CommentTagLength = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.misc.createAssertPrune<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
