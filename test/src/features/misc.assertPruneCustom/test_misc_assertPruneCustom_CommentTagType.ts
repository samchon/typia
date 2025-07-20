import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertPruneCustom_CommentTagType = (): void =>
  _test_misc_assertPrune(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) =>
    typia.misc.assertPrune<CommentTagType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
