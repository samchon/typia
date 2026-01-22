import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createAssertCloneCustom_CommentTagRange = (): void =>
  _test_misc_assertClone(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(
    typia.misc.createAssertClone<CommentTagRange>(
      (p) => new CustomGuardError(p),
    ),
  );
