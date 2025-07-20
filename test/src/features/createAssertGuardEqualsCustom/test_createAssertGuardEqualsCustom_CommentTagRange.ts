import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertGuardEqualsCustom_CommentTagRange = (): void =>
  _test_assertGuardEquals(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(
    typia.createAssertGuardEquals<CommentTagRange>(
      (p) => new CustomGuardError(p),
    ),
  );
