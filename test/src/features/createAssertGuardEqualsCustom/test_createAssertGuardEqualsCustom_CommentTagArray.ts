import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssertGuardEqualsCustom_CommentTagArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(
    typia.createAssertGuardEquals<CommentTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
