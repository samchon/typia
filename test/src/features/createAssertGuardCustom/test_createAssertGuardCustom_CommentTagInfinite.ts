import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuardCustom_CommentTagInfinite =
  _test_assertGuard(CustomGuardError)("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )(
    typia.createAssertGuard<CommentTagInfinite>((p) => new CustomGuardError(p)),
  );
