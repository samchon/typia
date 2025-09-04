import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertGuardEqualsCustom_CommentTagNaN = (): void =>
  _test_assertGuardEquals(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )((input) =>
    typia.assertGuardEquals<CommentTagNaN>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
