import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertGuardCustom_CommentTagType = (): void =>
  _test_assertGuard(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.createAssertGuard<CommentTagType>((p) => new CustomGuardError(p)));
