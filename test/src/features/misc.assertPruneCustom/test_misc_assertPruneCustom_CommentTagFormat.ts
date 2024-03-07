import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_CommentTagFormat =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)((input) =>
    typia.misc.assertPrune<CommentTagFormat>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
