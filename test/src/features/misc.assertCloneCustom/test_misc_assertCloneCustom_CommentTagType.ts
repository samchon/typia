import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertCloneCustom_CommentTagType =
  _test_misc_assertClone(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) =>
    typia.misc.assertClone<CommentTagType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
