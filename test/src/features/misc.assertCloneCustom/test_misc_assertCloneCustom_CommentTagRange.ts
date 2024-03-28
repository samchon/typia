import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_assertCloneCustom_CommentTagRange =
  _test_misc_assertClone(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) =>
    typia.misc.assertClone<CommentTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
