import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagNaN =
  _test_assertGuardEquals(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )(
    typia.createAssertGuardEquals<CommentTagNaN>(
      (p) => new CustomGuardError(p),
    ),
  );
