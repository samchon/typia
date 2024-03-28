import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_assertPruneCustom_CommentTagPattern =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.misc.assertPrune<CommentTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
