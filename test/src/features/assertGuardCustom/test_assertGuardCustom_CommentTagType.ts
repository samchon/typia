import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertGuardCustom_CommentTagType = (): void =>
  _test_assertGuard(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) =>
    typia.assertGuard<CommentTagType>(input, (p) => new CustomGuardError(p)),
  );
