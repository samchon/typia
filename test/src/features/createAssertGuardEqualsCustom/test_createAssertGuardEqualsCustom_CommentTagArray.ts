import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagArray =
  _test_assertGuardEquals(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(
    typia.createAssertGuardEquals<CommentTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
