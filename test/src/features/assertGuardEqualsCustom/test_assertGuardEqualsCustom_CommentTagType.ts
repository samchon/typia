import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertGuardEqualsCustom_CommentTagType =
  _test_assertGuardEquals(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) =>
    typia.assertGuardEquals<CommentTagType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
