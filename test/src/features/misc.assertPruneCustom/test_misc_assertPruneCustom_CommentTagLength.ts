import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_CommentTagLength =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.misc.assertPrune<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
