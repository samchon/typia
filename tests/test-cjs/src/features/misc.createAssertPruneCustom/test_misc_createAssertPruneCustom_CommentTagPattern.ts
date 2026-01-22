import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createAssertPruneCustom_CommentTagPattern = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.misc.createAssertPrune<CommentTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
