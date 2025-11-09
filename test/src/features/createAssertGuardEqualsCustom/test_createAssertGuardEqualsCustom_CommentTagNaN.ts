import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertGuardEqualsCustom_CommentTagNaN = (): void =>
  _test_assertGuardEquals(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )(
    typia.createAssertGuardEquals<CommentTagNaN>(
      (p) => new CustomGuardError(p),
    ),
  );
