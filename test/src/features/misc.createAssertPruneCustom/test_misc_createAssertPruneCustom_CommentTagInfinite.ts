import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_createAssertPruneCustom_CommentTagInfinite =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)(
    typia.misc.createAssertPrune<CommentTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
  );
