import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertGuardCustom_CommentTagRange = (): void =>
  _test_assertGuard(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.createAssertGuard<CommentTagRange>((p) => new CustomGuardError(p)));
