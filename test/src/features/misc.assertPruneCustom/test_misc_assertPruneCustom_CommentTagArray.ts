import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_assertPruneCustom_CommentTagArray =
  _test_misc_assertPrune(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) =>
    typia.misc.assertPrune<CommentTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
