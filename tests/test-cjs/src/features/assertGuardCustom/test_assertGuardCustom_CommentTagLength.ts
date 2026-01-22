import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertGuardCustom_CommentTagLength = (): void =>
  _test_assertGuard(CustomGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) =>
    typia.assertGuard<CommentTagLength>(input, (p) => new CustomGuardError(p)),
  );
