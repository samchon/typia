import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createAssertPruneCustom_CommentTagObjectUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.misc.createAssertPrune<CommentTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
