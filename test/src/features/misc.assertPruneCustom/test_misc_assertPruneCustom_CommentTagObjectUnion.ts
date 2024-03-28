import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_assertPruneCustom_CommentTagObjectUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.misc.assertPrune<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
