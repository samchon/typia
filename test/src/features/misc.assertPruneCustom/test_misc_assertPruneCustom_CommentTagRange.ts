import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_assertPruneCustom_CommentTagRange =
  _test_misc_assertPrune(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) =>
    typia.misc.assertPrune<CommentTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
