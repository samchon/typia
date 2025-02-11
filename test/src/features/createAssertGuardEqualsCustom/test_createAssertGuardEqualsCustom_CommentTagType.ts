import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertGuardEqualsCustom_CommentTagType =
  _test_assertGuardEquals(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(
    typia.createAssertGuardEquals<CommentTagType>(
      (p) => new CustomGuardError(p),
    ),
  );
